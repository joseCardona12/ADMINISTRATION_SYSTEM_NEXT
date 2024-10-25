"use client";
import styled from "styled-components";
import "./textAreaStyles.scss";


const StyledTextArea = styled.textarea
`
    border:1px solid red;

`;
interface ITextAreaProps{
    label:string,
    name:string,
    value:string,
    onChange: (e:React.ChangeEvent<HTMLTextAreaElement>)=>void
}

export default function TextArea({label,name,value,onChange}:ITextAreaProps):React.ReactElement{
    return(
        <div className="content-textarea">
            <label htmlFor={name}>{label}</label>
            <StyledTextArea name={name} rows={5} onChange={onChange} value={value}>
            </StyledTextArea>
        </div>
    )
}