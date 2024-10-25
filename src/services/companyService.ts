import { ICompany } from "@/models";
import { ICompanyResponse } from "@/models/companyInterface";
import { HttpClient } from "@/utils";

export default class CompanyService {
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }

    async findAll(page:number,size:number):Promise<ICompany[] | {message:string}>{
        try{
            const response = await this.httpClient.get<ICompanyResponse>("company", page,size);
            return response.content;
        }catch(error){
            return ({message: `Error with the method finAll ERROR: ${error}`})
        }
    }
}