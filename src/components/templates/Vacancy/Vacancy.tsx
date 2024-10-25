"use client";
import { SectionVacancy } from "@/components/organisms";
import { ICompany, IVacancy } from "@/models";
import { useActiveRol } from "@/global-state";
import { useState } from "react";

interface IVacancyProps{
    title:string,
    vacancies: IVacancy[],
    companies: ICompany[],
}
export default function Vacancy({title,vacancies,companies}: IVacancyProps):React.ReactNode{
    const {activeRol} = useActiveRol((state) =>state);
    const [loading,setLoading] = useState<boolean>(true);
    return(
        <SectionVacancy 
        title={activeRol === "vacancies" ? `${title}`: "Companies"}
        data={activeRol === "vacancies" ? vacancies : companies}
        loading={loading}
        setLoading={setLoading}
        />  
    )
}