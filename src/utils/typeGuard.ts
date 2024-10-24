import { ICompany, IVacancy } from "@/interfaces";

export function IsVacancy(item:IVacancy | ICompany):item is IVacancy{
    return (item as IVacancy).description !== undefined
}