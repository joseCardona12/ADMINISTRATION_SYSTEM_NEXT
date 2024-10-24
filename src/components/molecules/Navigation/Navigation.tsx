"use client";
import { IconsPlus, SuitcaseIcon, BuildingIcon } from "@/assets/icons";
import { Button } from "@/components/atoms";
import "./navigationStyles.scss";
import { useState } from "react";
import { useActiveRol } from "@/global-state";

export default function Navigation():React.ReactElement{

    const [state, setState] = useState<boolean>(false);
    const [activeRole,setActiveRol] = useState<string>("");
    const handleClickVacancies = ():void =>{
        console.log("Vancancies");
        setActiveRol("vacancies");
    }

    const handleClickCompanies = ():void =>{
        console.log("Companies");
        setActiveRol("companies");
    }

    
    return(
        <div className="content-navigation">
            <div className="navigation-left">
                <Button
                icon={<SuitcaseIcon />}
                text="Vacancies"
                backgroundColor="var(--color-purple-vacancy-normal)"
                borderRadius="var(--border-radius-large)"
                color="var(--color-white)"
                padding="var(--padding-small) var(--padding-medium)"
                onClick={handleClickVacancies}
                state={state}
                />

                <Button
                icon={<BuildingIcon />}
                text="Companies"
                backgroundColor="var(--background-gray-light-inactive)"
                borderRadius="0 var(--border-radius-medium) var(--border-radius-medium)0"
                color="var(--color-black)"
                padding="var(--padding-small) var(--padding-medium)"
                onClick={handleClickCompanies}
                state={state}
                />
            </div>
        </div>
    )
}