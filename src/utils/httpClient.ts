import { IVacancy } from "@/models";


const baseUrl:string = "http://192.168.88.153/api/v1/";
export default class HttpClient{
    private baseUrl:string;

    constructor(baseUrlClient?:string){
        this.baseUrl = baseUrlClient || baseUrl;
    }

    async get<T>(url:string, page:number, size:number):Promise<T>{
        const headers: {[key:string]:string} = await this.getHeader();
        const response = await fetch(`${this.baseUrl}${url}?page=${page}&size=${size}`, {
            headers,
            method: "GET",
            cache: "no-store",
        });
        return await this.manageError(response);
    }

    async post<T>(url:string, vancancy: Partial<IVacancy>):Promise<T>{
        const headers: {[key:string]:string} = await this.getHeader();
        const response = await fetch(`${this.baseUrl}${url}`, {
            headers,
            method: "POST",
            body: JSON.stringify(vancancy),
        });
        return await this.manageError(response);
    }

    async getHeader():Promise<{[key:string]:string}>{
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