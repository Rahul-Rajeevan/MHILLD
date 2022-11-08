import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import HomeSlide from '../Pages/HomeSlide'

const Footer = () => {
  const images=["https://mhidesign.com/wp-content/uploads/2015/01/vortex-2-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/MG_6217-Fina2l1-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/MG_6153-Final-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/MG_6168-Final-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/IMG_3028-303x210.jpg","https://mhidesign.com/wp-content/uploads/2015/01/vortex-2-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/MG_6217-Fina2l1-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/MG_6153-Final-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/MG_6168-Final-303x210.jpg","https://mhidesign.com/wp-content/uploads/2014/09/IMG_3028-303x210.jpg"]

  return (
    <Box>
<Box h="60vh" 
bg="black"
// bg="linear-gradient(180deg, hsla(360, 75%, 43%, 1) 0%, hsla(360, 79%, 39%, 1) 49%, hsla(0, 87%, 24%, 1) 100%)"
>
      <div style={{width:"48%",margin:"auto",paddingTop:"30px"}}><HomeSlide images={images} dur={1000} num={3} col={false}/></div>
      
    </Box>
    <Flex bg="black" color="white" justifyContent="center">
    <Text>© 2022 MHI Design.LLC . All rights reserved</Text>
  </Flex>
    </Box>
    
  )    
    
}

export default Footer