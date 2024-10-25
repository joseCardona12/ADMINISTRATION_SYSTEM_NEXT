"use client";
import { ICompany, IVacancy } from "@/interfaces";
import { Card, TitleContent } from "@/components/molecules";
import { useOpenModal } from "@/global-state";
import {Modal} from "@/components/molecules";
import { Input, Select, TextArea, Button, Loading } from "@/components/atoms";
import { IconsPlus } from "@/assets/icons";
import "./sectionVacancyStyles.scss";
import { useEffect, useState } from "react";
import {useActiveRol} from "@/global-state";
import { IsVacancy } from "@/utils";

interface ISectionVacancyProps{
    title:string,
    data: IVacancy[]  | ICompany[],
    loading:boolean
}

export default function SectionVacancy({title,data,loading}: ISectionVacancyProps):React.ReactNode{

    const initialVacancy: IVacancy = {
        title: "",
        description: "",
        state: "",
        company: ""
    }

    const initialCompany: ICompany = {
        name: "",
        location: "",
        contact: ""
    }
    
    const {isOpen, setIsOpen} = useOpenModal((state)=>state);
    const [vacancy, setVacancy] = useState<IVacancy>(initialVacancy);
    const [company, setCompany] = useState<ICompany>(initialCompany);
    const [valueSelectState,setValueSelectState] = useState<string>("");
    const [valueSelectCompany, setValueSelectCompany] = useState<string>("");
    const {activeRol} = useActiveRol((state)=>state);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        const {name, value} = e.target;
        if(vacancy){
            setVacancy((prev)=>({...prev, [name]:value}));
            return;
        }
        setCompany((prev)=>({...prev, [name]:value}));
    }
    const handleClickCreate = ():void =>{
        console.log("va", valueSelectState, valueSelectCompany)
        console.log(vacancy);  
    }

    useEffect(()=>{
        setVacancy({
            ...vacancy,
            state: valueSelectState,
            company: valueSelectCompany
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
                    value={vacancy.title}
                    />
                    <TextArea
                    label="Description"
                    name="description"
                    onChange={(e)=>handleChange(e)}
                    value={vacancy.description}
                    />
                    <Select
                    label="State"
                    name="state"
                    options={["OPEN", "CLOSED"]}
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
                    onClick={handleClickCreate}

                    />
                </Modal>
                : 
                <Modal title="Add Company" setIsOpen={setIsOpen}>
                    <Input
                    label="Name"
                    name="name"
                    onChange={(e)=>handleChange(e)}
                    type="text"
                    value={company.name}
                    borderFocus="var(--color-pink-company-normal)"
                    />
                    <Input
                    label="Location"
                    name="location"
                    onChange={(e)=>handleChange(e)}
                    type="text"
                    value={company.location}
                    borderFocus="var(--color-pink-company-normal)"
                    />
                    <Input
                    label="Contact"
                    name="contact"
                    onChange={(e)=>handleChange(e)}
                    type="text"
                    value={company.contact}
                    borderFocus="var(--color-pink-company-normal)"
                    />
                    
                    <Button
                    icon={""}
                    text="Add"
                    backgroundColor="var(--color-pink-company-normal)"
                    borderRadius="var(--border-radius-small)"
                    color="var(--color-white)"
                    padding="var(--padding-small) var(--padding-medium)"
                    onClick={handleClickCreate}

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
                company={item.company} 
                description={item.description}
                state={item.state}
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