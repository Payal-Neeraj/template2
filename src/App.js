import React,{useState} from 'react'
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles'
import Hero from './components/Hero'
import SliderData from './data/SliderData'
import Dropdown from './components/Dropdown'
import InfoSection from './components/InfoSection'
import InfoData from './data/InfoData'
import Footer from './components/Footer'
import './App.css'


function App() {
  const[isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Footer />
    </>
  );
}

export default App;
