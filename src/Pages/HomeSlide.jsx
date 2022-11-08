import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import styles from '../css/homeslide.module.css'
import { useEffect } from 'react';
import { useState } from 'react';


const HomeSlide = ({transition,easing,images,dur,num,col}) => {

  return (
<div >

        <div className={styles.g1} >
            <Slide autoplay={true} transitionDuration={transition} easing={easing} autoplayInterval={0} arrows={false} slidesToShow={num} duration={dur} pauseOnHover={true}>
                {images.map(e=>
                <div className={styles.each}>
                    <div style={{ 'backgroundImage': `url(${e})`}} className={styles.each1}></div>
                </div> 
                )}      
            </Slide>
            <br/><br/>
</div>
</div>
   

  )
}

export default HomeSlide