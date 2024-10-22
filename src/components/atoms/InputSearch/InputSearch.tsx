import React from "react";
import "./inputSearchStyles.scss";

interface IInputProps{
    type:string,
    name:string,
    value:string,
    placeholder:string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void;

}

export default function InputSearch({type,name,value, placeholder, onChange}:IInputProps):React.ReactNode{
    return(
        <input 
        placeholder={placeholder}
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} />
    )
}