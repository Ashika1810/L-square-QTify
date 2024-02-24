import React from "react";
import styles from "./Search.module.css"
import {ReactComponent as SearchIcon} from "../../Assets/Search-icon.svg"

function Search(){
    return (
        <div className={styles.container}>
        <input name="search" className={styles.searchbar} placeholder="Search a song of your choice" />
        <button type="submit" className={styles.searchbutton}>
            <SearchIcon />
        </button>
        </div>
    )
}

export default Search;