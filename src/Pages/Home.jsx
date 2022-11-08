import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useRef, useState } from 'react'

import styles from "../css/home.module.css"
import cartoon from "../Images/cartoon.jpg"
import HomeSlide from './HomeSlide';
import Hero from './Hero';

const Home = () => {
const img=[{src:"https://mhidesign.com/wp-content/uploads/2014/08/design.jpg",text:"DESIGN CONSULTANCY"},
{src:"https://mhidesign.com/wp-content/uploads/2014/08/interior-fit-out.jpg",text:"TURNKEY INTERIOR FITOUT"},
{src:"https://mhidesign.com/wp-content/uploads/2014/08/thumb12.jpg",text:"CUSTOM JOINERY WORKS"},
{src:"https://mhidesign.com/wp-content/uploads/2014/08/thumb13.jpg",text:"SOFT FURNISHING"},
{src:"https://mhidesign.com/wp-content/uploads/2014/08/thumb14.jpg",text:"MEP SERVICES"}];

const images=["https://mhidesign.com/wp-content/uploads/2015/01/vortex-2-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/MG_6217-Fina2l1-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/MG_6153-Final-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/MG_6168-Final-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/IMG_3028-303x210.jpg","https://mhidesign.com/wp-content/uploads/2015/01/vortex-2-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/MG_6217-Fina2l1-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/MG_6153-Final-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/MG_6168-Final-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/IMG_3028-303x210.jpg"]


const { ref:myRef, inView:visible} = useInView({
});


useEffect(() => {
 console.log(visible)
}, [visible])

  return (
    <div>
        <Box>
        <Hero/>
        {/* 5 boxes */}
        <p  className={styles.head1}>At Mussa Hussain Designs, we approach interior design using a combination of the science of effective space utilisation and the art of aesthetics in action.</p>
       <div style={{height:"10vh"}}></div>
        <div className={styles.grid} ref={myRef}>
          {img.map(e=><div key={e.src} className={visible?styles.show:styles.hidden}>
            <img src={e.src} alt={e.text}/>
            <p>{e.text}</p>
          </div>)}
        </div>
        <div style={{height:"100vh"}}>

</div>

        </Box>
    </div>
  )
}

export default Home