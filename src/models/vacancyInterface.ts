import { ICompany } from "./companyInterface"
import { IPageable, ISort2 } from "./paginationInterface"

export interface IVacancyResponse{
    content: IVacancy[]
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
  
  export interface IVacancy {
    id: number
    title: string
    description: string
    status: string
    company?: ICompany
  }
  
  export interface IVacancyCreate{
    title: string
    description: string
    status: string,
    companyId:string
  }