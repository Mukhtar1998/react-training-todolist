import { title } from "process";
import React from "react";
import "./Header.css";

type Headerprops = {
    title: string
};

// FUNCTIONAL COMPONENTS :

export const Header = ({title}: Headerprops) => {
    return(
    <div className="header">
    <h1>{title}</h1>
    </div>
    )
};

