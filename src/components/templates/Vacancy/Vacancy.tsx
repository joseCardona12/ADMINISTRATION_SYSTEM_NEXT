import { SectionVacancy } from "@/components/organisms";
import { IVacancy } from "@/interfaces";

export default function Vacancy():React.ReactNode{
    const vacancies:IVacancy[] = [
        {title:"Desarrollador Frontend", description:"Se busca desarrollador Frontend con experiencia en React", state:"OPEN", company:"TechCorp"},
        {title:"Desarrollador Backend", description:"Se busca desarrollador Backend con experiencia en Node", state:"OPEN", company:"TechCorp"},
        {title:"Desarrollador Mobile", description:"Se busca desarrollador Mobile con experiencia en React Native", state:"OPEN", company:"TechCorp"},
        {title:"Desarrollador Fullstack", description:"Se busca desarrollador Fullstack con experiencia en React y Node", state:"OPEN", company:"TechCorp"},
        {title:"Desarrollador Mobile", description:"Se busca desarrollador Mobile con experiencia en React Native", state:"OPEN", company:"TechCorp"},
        {title:"Desarrollador Fullstack", description:"Se busca desarrollador Fullstack con experiencia en React y Node", state:"OPEN", company:"TechCorp"},
    ]
    return(
        <SectionVacancy 
        title="Vacancies"
        backgroundColor="var(--color-purple-vacancy-normal)"
        data={vacancies}
        />  
    )
}