"use client";
import { IVacancy } from "@/interfaces";
import { Card, TitleContent } from "@/components/molecules";
import { useOpenModal } from "@/global-state";
import {Modal} from "@/components/molecules";
import { Input, Select, TextArea, Button } from "@/components/atoms";
import { IconsPlus } from "@/assets/icons";
import "./sectionVacancyStyles.scss";
import { useEffect, useState } from "react";

interface ISectionVacancyProps{
    title:string,
    backgroundColor:string,
    data: IVacancy[]
}

export default function SectionVacancy({title,backgroundColor,data}: ISectionVacancyProps):React.ReactNode{

    const initialModalData: IVacancy = {
        title: "",
        description: "",
        state: "",
        company: ""
    }
    const {isOpen, setIsOpen} = useOpenModal((state)=>state);
    const [vacancy, setVacancy] = useState<IVacancy>(initialModalData);
    const [valueSelectState,setValueSelectState] = useState<string>("");
    const [valueSelectCompany, setValueSelectCompany] = useState<string>("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
        const {name, value} = e.target;
        setVacancy((prev)=>({...prev, [name]:value}))
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
            : null
        }
        <div className="content-section-vacancy">
            <TitleContent
            title={title}
            backgroundColor={backgroundColor}
            />
            <div className="vacancy-cards">
                {data.map((vacancy:IVacancy, index:number)=>(
                    <Card
                    title={vacancy.title}
                    description={vacancy.description}
                    state={vacancy.state}
                    company={vacancy.company}
                    key={index}
                    />
                ))}
            </div>
        </div>
        </>
    )
}