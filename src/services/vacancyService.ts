import { IVacancy, IVacancyResponse } from "@/models";
import { HttpClient } from "@/utils";

export default class VacancyService{
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }

    async findAll(page:number,size:number):Promise<IVacancy[] | {message:string}>{
        try{
            const response = await this.httpClient.get<IVacancyResponse>("vacants", page,size);
            return response.content;

        }catch(error){
            return ({message: `Error with the method finAll ERROR: ${error}`})
        }
    }

    async create(vacancy:Partial<IVacancy>):Promise<IVacancy | {message:string}>{
        try{
            const response = await this.httpClient.post<IVacancy>("vacants", vacancy);
            return response;
        }catch(error){
            return ({message: `Error with the method create ERROR: ${error}`})
        }
    }
}