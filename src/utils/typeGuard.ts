import { ICompany, IVacancy } from "@/models";

export function IsVacancy(item:IVacancy | ICompany):item is IVacancy{
    return (item as IVacancy).description !== undefined
}