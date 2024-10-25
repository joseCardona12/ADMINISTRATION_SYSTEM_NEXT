import { IVacancy } from "@/models";
import { VacancyService } from "@/services";

class VacancyController{
    private vacancyService: VacancyService;

    constructor(){
        this.vacancyService = new VacancyService();
    }

    async getVacancies(page:number,size:number): Promise<IVacancy[] | {message:string}>{
        if(!page || !size){
            return {message: "Error with the method getVacancies"}
        }
        const vacancies = await this.vacancyService.findAll(page,size);
        return vacancies;
    }

    async createVacancy(vacancy:Partial<IVacancy>):Promise<IVacancy | {message:string}>{
        const vacancies = await this.vacancyService.create("/api/vacancies",vacancy);
        return vacancies;
    }
}

export default new VacancyController();