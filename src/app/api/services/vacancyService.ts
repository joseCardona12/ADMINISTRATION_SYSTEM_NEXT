<<<<<<< HEAD
import { IVacancy, IVacancyCreate } from "@/models";
import { HttpClientUtil } from "@/app/api/utils";

class VacancyService{
    private httpClientUtil:HttpClientUtil;
    constructor(){
        this.httpClientUtil = new HttpClientUtil();
    }

    async create(vacancy:Partial<IVacancyCreate>):Promise<IVacancy | {message:string}>{
        try{
            const response = await this.httpClientUtil.post<IVacancy>("vacants", vacancy);
            console.log("response", response);
            return response;
        }catch(error){
            return ({message: `Error with the method create ERROR: ${error}`})
        } 
    }
}
export default new VacancyService();
=======
import { IVacancy, IVacancyResponse } from "@/models";
import { HttpClient } from "@/utils";

export default class VacancyService{
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
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
>>>>>>> 766cf042be931ac40b833c048c97ef836d290378
