import { NextResponse, NextRequest } from "next/server";
import { verifyData } from "@/utils";
import { VacancyService } from "@/app/api/services/";

export async function POST(req:NextRequest):Promise<NextResponse>{
    const {title,description,status,companyId} = await req.json();
    console.log("back", title,description,status,companyId);
    const dataVerify = verifyData(title,description,status,"0c4c62a9-caf5-48f5-80e9-ab0094778058");
    if(!dataVerify){
        return NextResponse.json({message:"Please enter all the fields"});
    }
    const vacancyCreated = await VacancyService.create({title,description,status,companyId})
    return NextResponse.json(vacancyCreated);
}
