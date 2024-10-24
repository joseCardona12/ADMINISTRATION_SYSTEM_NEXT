"use client";
import { IconsPlus, SuitcaseIcon, BuildingIcon } from "@/assets/icons";
import { Button } from "@/components/atoms";
import "./navigationStyles.scss";
import { useState } from "react";
import { useActiveRol } from "@/global-state";

export default function Navigation():React.ReactElement{

    const [state, setState] = useState<boolean>(false);
    const {activeRol,setActiveRol} = useActiveRol((state)=>state);

    const handleClickVacancies = ():void =>{
        setActiveRol("vacancies");
    }

    const handleClickCompanies = ():void =>{
        setActiveRol("companies");
    }

    
    return(
        <div className="content-navigation">
            <div className="navigation-left">
                <Button
                icon={<SuitcaseIcon />}
                text="Vacancies"
                backgroundColor={activeRol === "vacancies" ? "var(--color-purple-vacancy-normal)": "var(--background-gray-light-inactive)"}
                borderRadius="var(--border-radius-large)"
                color={activeRol === "vacancies" ? "var(--color-white)": "var(--color-black)"}
                padding="var(--padding-small) var(--padding-medium)"
                onClick={handleClickVacancies}
                state={state}
                />

                <Button
                icon={<BuildingIcon />}
                text="Companies"
                backgroundColor={activeRol === "companies" ? "var(--color-pink-company-normal)": "var(--background-gray-light-inactive)"}
                borderRadius="var(--border-radius-medium)"
                color={activeRol === "companies" ? "var(--color-white)": "var(--color-black)"}
                padding="var(--padding-small) var(--padding-medium)"
                onClick={handleClickCompanies}
                state={state}
                />
            </div>
        </div>
    )
}