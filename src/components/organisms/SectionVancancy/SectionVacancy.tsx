import { IVacancy } from "@/interfaces";
import { Card, TitleContent } from "@/components/molecules";
import "./sectionVacancyStyles.scss";

interface ISectionVacancyProps{
    title:string,
    backgroundColor:string,
    data: IVacancy[]
}

export default function SectionVacancy({title,backgroundColor,data}: ISectionVacancyProps):React.ReactNode{
    return(
        <>
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
        </>
    )
}