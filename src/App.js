import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Right from './Pages/Right';
import { Box } from '@chakra-ui/react';
import Footer from './Components/Footer';

function App() {
  return (
    <Box>
    <Home/>
    <Right/>
    <Footer/>
    </Box>
  );
}

export default App;
