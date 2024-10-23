"use client";
import { Input, TextArea, Select } from "@/components/atoms";
import "./modalStyles.scss";

interface IModalProps{
    title:string,
    children?:React.ReactNode
}

export default function Modal({title,children}:IModalProps):React.ReactNode{
    return(
        <div className="content-modal">
            <div className="modal">
                <div className="modal-title">
                    <h3 className="title">{title}</h3>
                    <div className="title-close">
                        X
                    </div>
                </div>
                <div className="modal-inputs">
                    {children}
                </div>
            </div>
        </div>
    )
}