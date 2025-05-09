import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header'
import Hero from './components/Hero'
import Sectors from './components/Sectors'
import Chart from './components/Chart'
import Choice from './components/Choice'
import './App.css'
import Resources from './components/Resources'
import Actions from './components/Actions'
import Get from './components/Get'
import Footer from './components/Footer'
import BackToTopButton from './components/BackToTopButton';
import Sign_up from './components/Sign_up/Sign_up';


gsap.registerPlugin(ScrollTrigger);

function App() {
  const components = [
    { component: <Hero />, id: 'hero' },
    { component: <Sectors />, id: 'sectors' },
    { component: <Chart />, id: 'chart' },
    { component: <Choice />, id: 'choice' },
    { component: <Resources />, id: 'resources' },
    { component: <Actions />, id: 'actions' },
    { component: <Get />, id: 'get' },
    { component: <Footer />, id: 'footer' },
  ];


  useEffect(() => {
    components.forEach(({ id }) => {
      gsap.to(`#${id}`, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: `#${id}`,
          start: 'top 80%',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
          markers: false,
        },
        stagger: 0.1,
      });
    });
  }, []);

  return (

    <>
      {/* Header stays on top with higher z-index */}
      <div className='relative z-10'>
        <Header />
        <BackToTopButton />
        {/* <Sign_up /> */}
      </div>

      {/* Wrap other components in a lower z-index container */}
      <div>
        {components.map(({ component, id }) => (
          <div
            key={id}
            id={id}
            className='animated-section opacity-0 translate-y-52'
          >
            {component}
          </div>
        ))}
      </div>
    </>


  );
}

export default App;

