import React, {useEffect, useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import { useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({data}) => {
    const swiper = useSwiper();

    useEffect(()=>{
        swiper.slideTo(0);
    }, [data]);

    return <></>;

};

function Carousel({data, renderComponent}){
    return (
        <div className={styles.wrapper}>
            <Swiper
             styles={{padding: "0px 2px"}}
             initialSlide={0}
             modules={[Navigation]}
             slidesPerView={7}
             spaceBetween={40}
             allowTouchMove
             >
                <Controls data={data} />
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {data.map((ele)=>(
                    <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Carousel;