"use client";
import { IconsPlus, SuitcaseIcon, BuildingIcon } from "@/assets/icons";
import { Button } from "@/components/atoms";
import "./navigationStyles.scss";

export default function Navigation():React.ReactElement{
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
                onClick={()=>{}}
                />

                <Button
                icon={<BuildingIcon />}
                text="Vacancies"
                backgroundColor="var(--background-gray-light-inactive)"
                borderRadius="0 var(--border-radius-medium) var(--border-radius-medium)0"
                color="var(--color-black)"
                padding="var(--padding-small) var(--padding-medium)"
                onClick={()=>{}}
                />
            </div>
        </div>
    )
}