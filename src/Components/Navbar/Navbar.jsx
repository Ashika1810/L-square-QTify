import React from "react";
import styles from "./Navbar.module.css"
import Logo from "../Logo/Logo.jsx"
import Search from "../SearchBar/Search.jsx"; 
import Button from "../Button/Button.jsx";

export default function Navbar(){
    return (
        <>
        <nav className={styles.navbar}>
           <Logo /> 
           <Search />
           <Button /> 
        </nav>
        </>
    )
}