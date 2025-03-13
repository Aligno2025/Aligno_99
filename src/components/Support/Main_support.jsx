import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../Header'
import Hero_support from './Hero_support'
import Frequent_support from './Frequent_support'
import Three_steps from '../Three_steps'
import Footer from '../Footer'
import BackToTopButton from '../BackToTopButton';

gsap.registerPlugin(ScrollTrigger);


const Main_support = () => {
  const components = [
    { component: <Hero_support />, id: 'Hero_support' },
    { component: <Frequent_support />, id: 'Frequent_support' },
    { component: <Three_steps />, id: 'Three_steps' },
    { component: <Footer />, id: 'Footer' },
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
    <div>
     {/* Header stays on top with higher z-index */}
     <div className='relative z-10'>
        <Header />
        <BackToTopButton />
      </div>

    <div className='relative z-1'>
        {components.map(({ component, id }) => (
          <div
            key={id}
            id={id}
            className="animated-section"
            style={{ opacity: 0, transform: 'translateY(50px)' }}
          >
            {component}
          </div>
        ))}
      </div>
    </div>

    
  )
}

export default Main_support