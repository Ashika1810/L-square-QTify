import React, {useState, useEffect} from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";
import {ReactComponent as LeftArrow} from "../../../Assets/LeftArrow.svg";

export default function CarouselLeftNavigation(){
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange", function(){
            setIsBeginning(swiper.isBeginning);
        });
    },[]);

    return (
        <div className={styles.leftNavigation}>
            {!isBeginning && <LeftArrow onClick={()=> swiper.slidePrev()} />}
        </div>
    );
}