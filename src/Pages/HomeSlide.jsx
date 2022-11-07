import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from "../css/homeslide.module.css"
const HomeSlide = () => {
    const images=["https://mhidesign.com/wp-content/uploads/2015/01/vortex-2-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/MG_6217-Fina2l1-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/MG_6153-Final-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/MG_6168-Final-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/IMG_3028-303x210.jpg"]

    return (
        <Slide pauseOnHover="true" autoplay="true" duration={1000} infinite="true">
            <div className={styles.each}>
                {images.map(e=><img src={e} alt={e}/>)}
            </div>
        </Slide>
    );
};

export default HomeSlide;