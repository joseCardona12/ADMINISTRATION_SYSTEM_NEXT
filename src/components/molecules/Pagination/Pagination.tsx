
"use client";
import "./paginationStyles.scss";
import { ArrowBackIcon, ArrowRightIcon } from "@/assets/icons";
import { ButtonArrow } from "@/components/atoms";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";

interface IPaginationProps{
    indexStart: number,
    indexFinal: number
}
export default function Pagination({indexStart, indexFinal}: IPaginationProps):React.ReactNode{

    const [currentPage, setCurrentPage] = useState<number>(1);

    const handleClickBack = ():void =>{
        if(currentPage > indexStart){
            setCurrentPage(currentPage - 1);
            
        }
    }


    const handleClickRight = ():void =>{
        if(currentPage < indexFinal){
            setCurrentPage(currentPage + 1);
        }
    }

    useEffect(() => {
        Cookie.set("PAGE_NUMBER", currentPage.toString());
    }, [currentPage]); 
    return(
        <div className="content-pagination">
            <ButtonArrow
            icon={<ArrowBackIcon />}
            onClick={handleClickBack}
            />
            Page {currentPage} de {indexFinal}
            <ButtonArrow 
            icon={<ArrowRightIcon />}
            onClick={handleClickRight}
            />
        </div>
    )
}