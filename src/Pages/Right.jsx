import { Flex, Image, Spacer } from '@chakra-ui/react'
import React from 'react'
import whatsapp from "../Images/whatsapp.svg"
import styles from "../css/right.module.css"
const Right = () => {
  return (
    <Flex direction="column" height={["23%","23%","20%","20%","15vh"]} width="3vw" left="95vw" top={["75vh","78vh","78vh","78vh","81vh"]} position="fixed" zIndex="2" className={styles.right}>
        <img src="https://pluspng.com/img-png/whatsapp-logo-png-whatsapp-logo-png-transparent-amp-svg-vector-pluspng-2400x2400.png" alt="Whatsapp" w="35px" h="35px"/>
        <Spacer/>
        <img src="https://lh3.googleusercontent.com/9tLfTpdILdHDAvGrRm7GdbjWdpbWSMOa0csoQ8pUba9tLP8tq7M4Quks1xuMQAVnAxVfryiDXRzZ-KDnkPv8Sm4g_YFom1ltQHjQ6Q" alt="Whatsapp" w="35px" h="35px"/>
    </Flex>
  )
}

export default Right