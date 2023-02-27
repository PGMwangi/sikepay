import React,{useState,useRef} from 'react';
import '../styles/home.scss';
import Navbar from './Navbar';
import Header from './Header';
import ExchangeRates from './ExchangeRates';
import UpdateSection from './UpdateSection';
import About from './About';
import Footer from './Footer';
import LoginButton from './LoginButton';
import {useInView} from 'react-intersection-observer';


const Home = () => {
  const[animateHeader,setAnimateHeader] = useState(false);
  const[animateAbout,setAnimateAbout] = useState(false);
  const headerRef = useRef(null)
  const aboutRef = useRef(null)

  useInView(
    [headerRef, aboutRef],
    ([entryHeader, entryAbout]) =>{
      if (entryHeader && entryHeader.isIntersecting){
        setAnimateHeader(true);
      }
      if(entryAbout && entryAbout.isIntersecting){
        setAnimateAbout(true);
      }
    },
    {
      rootMargin:'0px 0px -50% 0px',
    }
  )
  return (
    <div className="home">
      {/* <Navbar /> */}
      <LoginButton className="home__login-button" />
      <Header ref={headerRef} className={animateHeader ? 'animate': ''}/>
      <ExchangeRates />
      <UpdateSection />
      <About ref ={aboutRef} className={animateAbout ? 'animate': ''}/>
      <Footer />
    </div>
  );
};

export default Home;


