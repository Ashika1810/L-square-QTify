import React from "react";
import {useOutletContext} from "react-router-dom";
import {fetchFilters} from "../../Components/api/api.jsx";
import Hero from "../../Components/Hero/Hero.jsx"
import Section  from "../../Components/Section/Section.jsx";
import styles from "./HomePage.module.css";

export default function HomePage(){
    const {data} = useOutletContext();
    const {newAlbums, topAlbums, songs} = data;

    return (
        <>
            <div className={styles.wrapper}>
                <Section title="Top Albums" data={topAlbums} type="album" />
                <Section title="New Albums" data={newAlbums} type="album" />
                <Section
                    title="Songs"
                    data={songs}
                    filterSource={fetchFilters}
                    type="song"
                  />  
            </div>
        </>
    );
}