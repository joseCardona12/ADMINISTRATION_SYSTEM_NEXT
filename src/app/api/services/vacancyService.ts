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