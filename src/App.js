import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Right from './Pages/Right';
import { Box } from '@chakra-ui/react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'
import HomeSlide from './Pages/HomeSlide';

function App() {
  const images=["https://mhidesign.com/wp-content/uploads/2020/02/2-2-2.jpg","https://mhidesign.com/wp-content/uploads/2020/02/2-2-2.jpg","https://mhidesign.com/wp-content/uploads/2020/02/2-2-2.jpg","https://mhidesign.com/wp-content/uploads/2020/02/2-2-2.jpg","https://mhidesign.com/wp-content/uploads/2020/02/2-2-2.jpg","https://mhidesign.com/wp-content/uploads/2020/02/2-2-2.jpg","https://mhidesign.com/wp-content/uploads/2020/02/2-2-2.jpg","https://mhidesign.com/wp-content/uploads/2020/02/2-2-2.jpg","https://mhidesign.com/wp-content/uploads/2020/02/2-2-2.jpg","https://mhidesign.com/wp-content/uploads/2020/02/2-2-2.jpg","https://mhidesign.com/wp-content/uploads/2020/02/2-2-2.jpg"]

  return (
    <Box>
      <Box  m="auto" w="80%">
      <Navbar />
    {/* <HomeSlide images={images} transition={2500} easing={"ease-in"} dur={3000} num={1} col={false}/> */}
    
      </Box>
      <Home/>
    <Right/>
    <Footer/>
    </Box>
  );
}

export default App;
