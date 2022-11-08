import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../css/home.module.css"
import vid from "../Images/vid.mp4"
const Hero = () => {
  return (
    <Box h="100vh" position='relative'>
        <video src={vid} muted autoPlay loop />
        <Box h="70vh" pt="100px" position="absolute" top={0}>
        <Flex gap="15px" bg='rgba(0, 0, 0, 0.5)'><Text 
  fontSize='76px'
  lineHeight='100px'
  fontWeight='500' color="white">Expert </Text><Text  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='76px'
  lineHeight='100px'
  fontWeight='500' >interior design</Text></Flex> 
        <Text fontSize='76px'
  lineHeight='100px'
  fontWeight='500' color="white"  bg='rgba(0, 0, 0, 0.5)'>from the brightest minds in the industry</Text>
        </Box>
        
         </Box>
  )
}

export default Hero