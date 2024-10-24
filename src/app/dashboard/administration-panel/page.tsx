import { AdminstrationPanel } from "@/components/layouts";
import { Header,Footer } from "@/components/organisms";
import { Vacancy } from "@/components/templates";
import { ICompany, IVacancy } from "@/interfaces";

export default function AdministrationPanelView(){

    const vacancies:IVacancy[] = [
        {title:"Desarrollador Frontend", description:"Se busca desarrollador Frontend con experiencia en React", state:"OPEN", company:"TechCorp"},
        {title:"Desarrollador Backend", description:"Se busca desarrollador Backend con experiencia en Node", state:"OPEN", company:"TechCorp"},
        {title:"Desarrollador Mobile", description:"Se busca desarrollador Mobile con experiencia en React Native", state:"OPEN", company:"TechCorp"},
        {title:"Desarrollador Fullstack", description:"Se busca desarrollador Fullstack con experiencia en React y Node", state:"OPEN", company:"TechCorp"},
        {title:"Desarrollador Mobile", description:"Se busca desarrollador Mobile con experiencia en React Native", state:"OPEN", company:"TechCorp"},
        {title:"Desarrollador Fullstack", description:"Se busca desarrollador Fullstack con experiencia en React y Node", state:"OPEN", company:"TechCorp"},
    ]
    const companies: ICompany[] = [
        {name:"TechCorp", location:"Barcelona", contact:"contact@techcorp.com"},
        {name:"Riwi", location:"Madrid", contact:"contact@riwi.com"},
        {name:"TechCorp", location:"Barcelona", contact:"contact@techcorp.com"},
    ]
    return(
        <AdminstrationPanel
        header={<Header />}
        main={
            <Vacancy
            title="Vacancies"
            vacancies={vacancies}
            companies={companies}
            />}
        footer={<Footer />}
        />
    )
}