"use client";
import { ICompany, IVacancy, IVacancyCreate } from "@/models";
import { Card, TitleContent, InputAlert } from "@/components/molecules";
import { useOpenModal } from "@/global-state";
import {Modal} from "@/components/molecules";
import { Input, Select, TextArea, Button, Loading } from "@/components/atoms";
import { IconsPlus } from "@/assets/icons";
import "./sectionVacancyStyles.scss";
import { useEffect, useState } from "react";
import {useActiveRol} from "@/global-state";
import { IsVacancy, verifyData } from "@/utils";
import { vacancyController } from "@/controllers";
import { useRouter } from "next/navigation";
import uniqueString from "unique-string";

interface ISectionVacancyProps{
    title:string,
    data: IVacancy[]  | ICompany[],
    loading:boolean,
    setLoading: (loading:boolean) => void
}

export default function SectionVacancy({title,data,loading,setLoading}: ISectionVacancyProps):React.ReactNode{

    const initialVacancy: Partial<IVacancy> = {
        id: 0,
        title:"",
        description: "",
        status: "",
        company: {
            id: "",
            name: "",
            location: "",
            contact: ""
        }
    }

    const initialCompany: Partial<ICompany> = {
        id: "",
        name: "",
        location: "",
        contact: ""
    }
    
    const router = useRouter();
    const {isOpen, setIsOpen} = useOpenModal((state)=>state);
    const [vacancy, setVacancy] = useState<Partial<IVacancy>>(initialVacancy);
    const [company, setCompany] = useState<Partial<ICompany>>(initialCompany);

    const [valueSelectState,setValueSelectState] = useState<string>("");
    const [valueSelectCompany, setValueSelectCompany] = useState<string>("");
    const {activeRol} = useActiveRol((state)=>state);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        const {name, value} = e.target;
        if(vacancy){
            setVacancy((prev)=>(
                {...prev, 
                    id: parseInt(uniqueString()), 
                    [name]:value
                }));
        }
        setCompany((prev)=>(
            {...prev,
                id: uniqueString(), 
                [name]:value
            }
        ));
    }
    const handleClickCreateVacancy = async():Promise<void> =>{ // Create vacancy 
        const dataVerify = verifyData(vacancy.title, vacancy.description,vacancy.status);
        if(!dataVerify){
            InputAlert("Please enter all the fields", "error");
            return;
        }
        const newCreateVacancy:IVacancyCreate = {
            title: vacancy.title!,
            description: vacancy.description!,
            status: vacancy.status!,
            companyId: "152b99bd-f1cf-4fb8-a55b-7976352fa7d1"
        }
        const createdVacancy = await vacancyController.createVacancy(newCreateVacancy);
        if("message" in createdVacancy){
            InputAlert(createdVacancy.message, "error");
            return;
        }
        InputAlert("Vacancy created successfully", "success");
        router.refresh();
        
    }
    const handleClickCreateCompany = async():Promise<void> =>{
        const dataVerify = verifyData(company.location, company.name, company.contact);
        if(!dataVerify){
            InputAlert("Please enter all the fields", "error");
            return;
        }
        console.log("add company");
    }
    useEffect(()=>{ // Get value enter for user and change information in the state vacancy
        setVacancy({
            ...vacancy,
            status: valueSelectState,
            company: {
                id: (data.length + 1).toString(),
                name: valueSelectCompany,
                location: "Location",
                contact: "Contact"
            }
        });
    }, [valueSelectState, valueSelectCompany])
    return(
        <>{isOpen ? 
            activeRol === "vacancies"
                ?
                <Modal title="Add vancancy" setIsOpen={setIsOpen}>
                    <Input
                    label="Title"
                    name="title"
                    onChange={(e)=>handleChange(e)}
                    type="text"
                    value={vacancy.title!}
                    />
                    <TextArea
                    label="Description"
                    name="description"
                    onChange={(e)=>handleChange(e)}
                    value={vacancy.description!}
                    />
                    <Select
                    label="State"
                    name="state"
                    options={["ACTIVE", "DESACTIVE"]}
                    valueDefault="Select a state"
                    value={valueSelectState}
                    setValue={setValueSelectState}
                    />
                    <Select
                    label="Company"
                    name="company"
                    options={["TechCorp", "Riwi"]}
                    valueDefault="Select a Company"
                    value={valueSelectCompany}
                    setValue={setValueSelectCompany}
                    />
                    <Button
                    icon={<IconsPlus />}
                    text="Add"
                    backgroundColor="var(--color-purple-vacancy-normal)"
                    borderRadius="var(--border-radius-small)"
                    color="var(--color-white)"
                    padding="var(--padding-small) var(--padding-medium)"
                    onClick={handleClickCreateVacancy}
                    />
                </Modal>
                : 
                <Modal title="Add Company" setIsOpen={setIsOpen}>
                    <Input
                    label="Name"
                    name="name"
                    onChange={(e)=>handleChange(e)}
                    type="text"
                    value={company.name!}
                    borderFocus="var(--color-pink-company-normal)"
                    />
                    <Input
                    label="Location"
                    name="location"
                    onChange={(e)=>handleChange(e)}
                    type="text"
                    value={company.location!}
                    borderFocus="var(--color-pink-company-normal)"
                    />
                    <Input
                    label="Contact"
                    name="contact"
                    onChange={(e)=>handleChange(e)}
                    type="text"
                    value={company.contact!}
                    borderFocus="var(--color-pink-company-normal)"
                    />
                    
                    <Button
                    icon={""}
                    text="Add"
                    backgroundColor="var(--color-pink-company-normal)"
                    borderRadius="var(--border-radius-small)"
                    color="var(--color-white)"
                    padding="var(--padding-small) var(--padding-medium)"
                    onClick={handleClickCreateCompany}
                    />
                </Modal>
            : null
        }
        <div className="content-section-vacancy">
            {loading ? <Loading /> : null}
            <TitleContent
            textButton={activeRol === "vacancies" ? "Add vacancy" : "Add company"}
            title={title}
            backgroundColor={activeRol === "vacancies" ? "var(--color-purple-vacancy-normal)" : "var(--color-pink-company-normal)"}
            />
            <div className="vacancy-cards">
                {data.map((item, index:number)=>
                IsVacancy(item) 
                ? 
                <Card 
                title={item.title}
                company={item.company?.name} 
                description={item.description}
                state={item.status}
                key={index}
                index={index}
                />
                :
                <Card 
                title={item.name}
                location={item.location}
                contact={item.contact}
                key={index}
                index={index}
                />
                )}
            </div>
        </div>
        </>
    )
}