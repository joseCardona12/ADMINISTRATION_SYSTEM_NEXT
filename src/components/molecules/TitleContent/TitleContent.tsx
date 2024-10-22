"use client";
import { Button } from "@/components/atoms";
import { IconsPlus } from "@/assets/icons";
import "./titleContentStyles.scss"

interface ITitleContentProps{
    title:string,
    backgroundColor: string,
}

export default function TitleContent({title,backgroundColor}:ITitleContentProps):React.ReactNode{
    return(
        <div className="content-title">
            <h2>{title}</h2>
            <Button
            icon={<IconsPlus />}
            text={"Add vacancy"}
            backgroundColor={backgroundColor}
            borderRadius="var(--border-radius-large)"
            color="var(--color-white)"
            padding="var(--padding-small) var(--padding-medium)"
            onClick={()=>{}}
            />
        </div>
    )
}