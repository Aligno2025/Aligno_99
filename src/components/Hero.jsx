import React, { useRef,useContext } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import img2 from '../assets/img/amico.png';
import img1 from '../assets/img/bro.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext.jsx';

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const container = useRef();
    const { isLoggedIn, logout } = useContext(AuthContext);

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
        <div className='@container'>
            <div ref={container} className='headerbackground md:grid md:grid-cols-5 gap-2 justify-center items-center text-center '>
                <div className='invisible md:visible hero-element absolute md:relative'>
                    <img className='w-[100%] object-contain md:pt-60 pl-5' src={img1} alt="Illustration 1" />
                </div>
                <div className='md:col-span-3 hero-element md:pt-30 pt-25 md:pb-30 pb-20'>
                    <div>
                        <h1 className='@5xl:text-4xl/15 @3xl:text-2xl/10 text-3xl/10  font-extrabold font-poppins '>
                            All-In-One <span className='text-amber-48'>Task Management</span> and <span className='text-orange-225'>Collaboration</span> Platform
                        </h1>
                        <p className='mt-5 pl-10 pr-10 font-Roboto md:text-lg/8 text-xs/5 font-normal '>
                            The ultimate productivity tool to streamline task management, set deadlines and collaborate effectively, all in one place.
                        </p>
                        <div className='flex gap-2 @5xl:gap-5 justify-center md:mt-10 mt-5 text-xs @5xl:text-base md:font-medium font-poppins'>
                            <p><span className='p-1.5 rounded-2xl inline-block mr-1 md:mx-4 bg-purple-185'></span>Align Tasks</p>
                            <p><span className='p-1.5 rounded-2xl inline-block mr-1 md:mx-4 bg-orange-225'></span>Empower Teams</p>
                            <p><span className='p-1.5 rounded-2xl inline-block mr-1 md:mx-4 bg-red-250'></span>Achieve More</p>
                        </div>
                     {!isLoggedIn &&  <button className='md:mr-20 mr-6 md:pt-16 pt-8'>
                            <Link to="/Sign_in" className="md:px-8 px-6 md:py-4 py-2 bg-amber-48 font-Roboto text-sm md:text-base font-medium text-white hover:bg-white border-2 hover:text-amber-48" >
                                Get Started
                            </Link>
                        </button>}

                       {!isLoggedIn &&  <button>
                            <Link to="/Sign_in" className="md:px-8 px-6 md:py-4 py-2  font-Roboto text-sm md:text-base font-medium text-black hover:bg-amber-48 hover:text-white hover:border-amber-48 border-2 ">
                                Learn More
                            </Link>
                        </button>}
                    </div>
                </div>
                <div className='hero-element absolute md:relative'>
                    <img className='w-[100%] object-contain pr-5 md:visible invisible' src={img2} alt="Illustration 2" />
                </div>
            </div>
        </div>
    );
};

export default Hero;