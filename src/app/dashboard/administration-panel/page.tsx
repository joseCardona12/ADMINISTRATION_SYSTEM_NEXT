import { AdminstrationPanel } from "@/components/layouts";
import { Header,Footer } from "@/components/organisms";
import { Vacancy } from "@/components/templates";
import { companyController, vacancyController } from "@/controllers";
import { ICompany, IVacancy } from "@/models";
import { cookies } from "next/headers";

export default async function AdministrationPanelView(){
    
    const cookieManager = await cookies();
    const pageNumber = cookieManager.get("PAGE_NUMBER")?.value || "1";
    const vacancies = await vacancyController.getVacancies(parseInt(pageNumber),6);
    const companies = await companyController.getCompanies(parseInt(pageNumber),6);
    if("message" in vacancies){
        return <div>{vacancies.message}</div>
    }
    console.log("dasdas",cookieManager.get("PAGE_NUMBER")?.value);
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