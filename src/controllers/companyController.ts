import { CompanyService } from "@/services";

class CompanyController {
    private companyService: CompanyService;
    constructor(){
        this.companyService = new CompanyService();
    }

    async getCompanies(page:number,size:number):Promise<any>{
        const companies = await this.companyService.findAll(page,size);
        return companies;
    }
}

export default new CompanyController();