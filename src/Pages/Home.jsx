import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Components/Navbar'
import styles from "../css/home.module.css"
import cartoon from "../Images/cartoon.jpg"
import HomeSlide from './HomeSlide';

const Home = () => {
const img=[{src:"https://mhidesign.com/wp-content/uploads/2014/08/design.jpg",text:"DESIGN CONSULTANCY"},
{src:"https://mhidesign.com/wp-content/uploads/2014/08/interior-fit-out.jpg",text:"TURNKEY INTERIOR FITOUT"},
{src:"https://mhidesign.com/wp-content/uploads/2014/08/thumb12.jpg",text:"CUSTOM JOINERY WORKS"},
{src:"https://mhidesign.com/wp-content/uploads/2014/08/thumb13.jpg",text:"SOFT FURNISHING"},
{src:"https://mhidesign.com/wp-content/uploads/2014/08/thumb14.jpg",text:"MEP SERVICES"}];
const { ref:myRef, inView:visible} = useInView({
});


useEffect(() => {
 console.log(visible)
}, [visible])

  return (
    <div>
        <Box m="auto" w="80%">
        <Navbar/>
        <div style={{height:"100vh", display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{width:"50%"}}>
          <p style={{fontSize:"40px"}}>Expert interior design from the brightest minds in the industry</p>
        <p>The science of efficient space utilisation and the art of aesthetics in action, combined into a single approach – that is how we do interior design here at Mussa Hussain Designs.</p>
        <p>Our services is extended to the diffeent locations include JAFZA, JLT etc.</p>
          </div>
        <div style={{width:"50%"}}>
          <img src={cartoon} alt=""/>
        </div>
        </div>
        {/* 5 boxes */}
        <div className={styles.grid} ref={myRef}>
          {img.map(e=><div key={e.src} className={visible?styles.show:styles.hidden}>
            <img src={e.src} alt={e.text}/>
            <p>{e.text}</p>
          </div>)}
        </div>
        <div style={{height:"100vh"}}>

</div>

        </Box>
        <div style={{height:"30vh",background: "linear-gradient(180deg, hsla(360, 75%, 43%, 1) 0%, hsla(360, 79%, 39%, 1) 49%, hsla(0, 87%, 24%, 1) 100%)"}}>
        {/* {slide.map(e=><div key={e}>
            <img src={e} alt={e}/>
          </div>)} */}
          <div style={{width:"50%",margin:"auto",paddingTop:"30px"}}><HomeSlide/></div>
</div>
    </div>
  )
}

export default Home