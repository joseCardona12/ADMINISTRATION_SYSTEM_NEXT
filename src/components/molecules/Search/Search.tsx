"use client";
import { SearchIcon } from "@/assets/icons";
import { InputSearch } from "@/components/atoms";
import { useState } from "react";
import "./searchStyles.scss";

export default function Search():React.ReactNode{

    const [searchValue, setSearchValue] = useState<string>("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        
    }
    return(
        <div className="content-search">
            <SearchIcon />
            <InputSearch
            type="text"
            placeholder="Search..."
            name="search"
            onChange={(e)=>handleChange(e)}
            value={searchValue}
            />
        </div>
    )
}