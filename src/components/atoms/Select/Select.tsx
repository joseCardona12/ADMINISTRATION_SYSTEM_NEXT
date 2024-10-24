"use client";
import { ArrowDownIcon } from "@/assets/icons";
import "./selectStyles.scss";
import { useState } from "react";

interface ISelectProps{
    label:string,
    name:string,
    options: string[],
    valueDefault?:string,
    value?:string
    setValue: (value:string)=>void
}

export default function Select({label, name, options, valueDefault, value, setValue}:ISelectProps):React.ReactElement{
    
    const [openOptions, setOpenOptions] = useState<boolean>(false);
    const handleClickOpen = ():void =>{
        setOpenOptions(!openOptions);
    }
    const handleClickClose = (option:string):void =>{
        setValue(option);
        setOpenOptions(false);
    }
    return(
        <div className="content-select">
            <label htmlFor={name}>{value ? value : label}</label>
            <div onClick={handleClickOpen}>
                <ArrowDownIcon />
            </div>
            {openOptions 
            ? 
            <ul className="select-options">
                {options.map((option:string, index:number)=>(
                    <li key={index} onClick={()=>handleClickClose(option)}>{option}</li>
                ))}
                <li onClick={()=>handleClickClose("")}>{valueDefault}</li>
            </ul>
            :null
            }
        </div>
    )
}