"use client";
import { IVacancy } from "@/interfaces";
import { Card, TitleContent } from "@/components/molecules";
import "./sectionVacancyStyles.scss";
import { useOpenModal } from "@/global-state";
import {Modal} from "@/components/molecules";
import { Input, Select, TextArea } from "@/components/atoms";

interface ISectionVacancyProps{
    title:string,
    backgroundColor:string,
    data: IVacancy[]
}

export default function SectionVacancy({title,backgroundColor,data}: ISectionVacancyProps):React.ReactNode{
    const {isOpen} = useOpenModal((state)=>state);
    return(
        <>{isOpen ? 
            <Modal title="Add vancancy">
                <Input
                label="Title"
                name="title"
                onChange={()=>{}}
                type="text"
                value=""
                />
                <TextArea
                label="Description"
                name="description"
                />
                <Select
                label="State"
                name="state"
                options={["OPEN", "CLOSED"]}
                valueDefault="Select a state"
                />

                <Select
                label="Company"
                name="company"
                options={["TechCorp", "Riwi"]}
                valueDefault="Select a Company"
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