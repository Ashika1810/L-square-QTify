import React from "react";
import styles from "./Card.module.css";
import {Chip, Tooltip} from "@mui/material";
import {Link} from "react-router-dom";

function Card({data, type}){
    const getCard = (type) =>{
        if(type==="album"){
            const {image, follows, title, slug, songs}= data;
            return (
                <Tooltip title={`${songs.length} songs`} placement="top-end" arrow>
                <Link to= {`album${slug}`}>
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <div className={styles.image}>
                        <img src={image} alt="album" loading="lazy" />
                        </div>
                        <div className={styles.banner}>
                            <Chip label={`${follows} follows`}
                            size="small"
                            className={styles.chip}/>
                        </div>
                    </div>
                    <div className={styles.titlewrapper}>
                        <p>{title}</p>
                    </div>
                </div>
                </Link>
                </Tooltip>
            );
        }
        else if(type==="song"){
            const {image, likes, title}= data;
            return (
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <div className={styles.image}>
                    <img src={image} alt="song" loading="lazy"/>
                    </div>
                    <div className={styles.banner}>
                        <div className={styles.pill}>
                            <p>{likes} Likes</p>
                        </div>
                    </div>
                    </div>
                    <div className={styles.titlewrapper}>
                        <p>{title}</p>
                    </div>
                </div>
            )
        }
        else{
            return(
                <></>
            )
        }
    }
    return getCard(type);
}

export default Card;