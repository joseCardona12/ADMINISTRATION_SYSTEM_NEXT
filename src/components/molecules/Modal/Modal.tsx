"use client";
import { Input, TextArea, Select } from "@/components/atoms";
import "./modalStyles.scss";

interface IModalProps{
    title:string,
    children?:React.ReactNode,
    setIsOpen:(isOpen:boolean)=>void
}

export default function Modal({title,children,setIsOpen}:IModalProps):React.ReactNode{

    const handleCloseModal = ():void =>{
        setIsOpen(false);
    }
    return(
        <div className="content-modal">
            <div className="modal">
                <div className="modal-title">
                    <h3 className="title">{title}</h3>
                    <div className="title-close" onClick={handleCloseModal}>
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