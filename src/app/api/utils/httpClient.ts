import { IVacancy } from "@/models";

const baseUrl = "http://192.168.88.153/api/v1/";
export default class HttpClientUtil {
    private baseUrl:string;

    constructor(baseUrlClient?:string){
        this.baseUrl = baseUrlClient || baseUrl;
    }

    async post<T>(url:string, vacancy: Partial<IVacancy>):Promise<T>{
        const headers = await this.getHeaders();
        console.log("data", vacancy)
        const response = await fetch(`${this.baseUrl}${url}`, {
            headers,
            method: "POST",
            body: JSON.stringify(vacancy),
        });
        console.log("dasd", response);
        return await this.manageError(response);
    }

    async getHeaders():Promise<{[key:string]:string}>{
        return {
            "Content-Type": "application/json",
        }
    }
    private async manageError(response:Response){
        if(!response.ok){
            const errorData = await response.json();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
        }
        return await response.json();
    }
}