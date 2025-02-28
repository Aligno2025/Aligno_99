import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import img2 from '../assets/img/amico.png';
import img1 from '../assets/img/bro.png';
import { Link } from 'react-router-dom';

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.from('.hero-element', {
            opacity: 0,
            y: 50,
            duration: 1.5,
            stagger: 0.2,
            ease: 'power3.out',
        });
    }, { scope: container });

    return (
        <div ref={container} className='headerbackground md:h-screen h-120 md:grid md:grid-cols-5 gap-2 justify-center items-center text-center'>
            <div className='invisible md:visible hero-element'>
                <img className='w-50 md:pt-60 pl-5' src={img1} alt="Illustration 1" />
            </div>

            <div className='md:col-span-3 hero-element'>
                <div>
                    <h1 className='md:text-5xl/15 text-3xl/10 font-extrabold font-poppins md:mt-20'>
                        All-In-One <span className='text-amber-48'>Task Management</span> and <span className='text-orange-225'>Collaboration</span> Platform
                    </h1>
                    <p className='mt-5 pl-10 pr-10 font-Roboto md:text-lg/8 text-xs/5 font-normal'>
                        The ultimate productivity tool to streamline task management, set deadlines and collaborate effectively, all in one place.
                    </p>

                    <div className='grid grid-cols-3 md:gap-5 justify-center md:mt-10 mt-5 text-xs md:text-base font-medium font-poppins'>
                        <p><span className='p-1.5 rounded-2xl inline-block mr-1 md:mx-4 bg-purple-185'></span>Align Tasks</p>
                        <p><span className='p-1.5 rounded-2xl inline-block mr-1 md:mx-4 bg-orange-225'></span>Empower Teams</p>
                        <p><span className='p-1.5 rounded-2xl inline-block mr-1 md:mx-4 bg-red-250'></span>Achieve More</p>
                    </div>

                    <button className='md:mr-20 mr-6 md:pt-16 pt-8'>
                        <Link to="/Sign_up" className="px-6 py-1.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-2 hover:text-amber-48" >
                            Get Started
                        </Link>
                    </button>

                    <button>
                        <Link to="/Error" className="px-6 py-1.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-2 hover:text-amber-48">
                            Learn More
                        </Link>
                    </button>
                </div>
            </div>

            <div className='hero-element'>
                <img className='w-50 md:pb-40 pl-10 pr-5 md:visible invisible' src={img2} alt="Illustration 2" />
            </div>
        </div>
    );
};

export default Hero;