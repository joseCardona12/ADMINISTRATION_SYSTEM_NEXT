import { IPageable, ISort2 } from "./paginationInterface"
import { IVacancy } from "./vacancyInterface"

export interface ICompanyResponse{
    content: ICompany[]
    pageable: IPageable
    totalPages: number
    totalElements: number
    last: boolean
    numberOfElements: number
    size: number
    number: number
    sort: ISort2
    first: boolean
    empty: boolean
  }

export interface ICompany{
    id:string,
    name:string,
    location:string,
    contact:string,
    vacants?: Partial<IVacancy[]>
}