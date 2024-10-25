import { VacancyService } from "@/services";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req:NextRequest):Promise<NextResponse>{
    const body = await req.json();
    const vacancyService = new VacancyService();
    const vacancyCreated = await vacancyService.create(body);
    if("message" in vacancyCreated){
        return NextResponse.json(vacancyCreated, {status: 500});
    }
    return NextResponse.json(vacancyCreated);
}
