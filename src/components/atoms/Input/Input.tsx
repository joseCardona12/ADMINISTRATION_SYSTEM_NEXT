"use client";
import "./inputStyles.scss";
import styled from "styled-components";

const StyledInput = styled.input<{border?:string}>
`
    border: 1px solid var(--border-color-gray);
    padding: var(--padding-small);
    border-radius: var(--border-radius-small);
    &:focus{
        border:1px solid ${(props)=>props.border};
    }

`;
interface IInputProps{
    label:string
    name:string,
    type: "text" | "email" | "password",
    value:string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) =>void,
    borderFocus?: string,
}
export default function Input({label,name,type,value,onChange, borderFocus="var( --color-purple-vacancy-normal)"}:IInputProps):React.ReactNode{
    return(
        <div className="content-input">
            <label htmlFor={name}>{label}</label>
            <StyledInput 
            type={type} 
            name={name}
            value={value}
            onChange={onChange}
            border={borderFocus}
            />
        </div>
    )
}