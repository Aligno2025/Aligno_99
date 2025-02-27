import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Collaboration from './Collaboration_team'
import Header from '../Header'
import Chart_team from './Chart_team'
import Footer from '../Footer'
import Three_steps from '../Three_steps'
import Progress_team from './Progress_team'
import About_team from './About_team'
import BackToTopButton from '../BackToTopButton';

gsap.registerPlugin(ScrollTrigger);

const main_team = () => {
  const components = [
    { component: <Collaboration />, id: 'Collaboration' },
    { component: <Chart_team />, id: 'Chart_team' },
    { component: <Progress_team />, id: 'Progress_team' },
    { component: <About_team />, id: 'About_team' },
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
     <div class='relative z-10'>
        <Header />
        <BackToTopButton />
      </div>

    <div claaa='relative z-1'>
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

export default main_team