import React, { useState, useEffect, useRef } from 'react';
import { SlArrowDown } from "react-icons/sl";
import { IoCloseSharp } from "react-icons/io5";
import { LuSearch, LuSquareMenu } from "react-icons/lu";
import { MdTask } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Contact_us from './Contact_us';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(dropdownRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
    }
  }, [isOpen]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };




  return (
    <div className="absolute w-full @container">
      <nav className="bg-white h-16 pt-4 pl-4 pr-4   @5xl:pr-10  @5xl:pl-10 w-full justify-evenly md:justify-between flex border-b border-gray-300">
        <div>
          <Link to="/" className='font-poppins text-2xl text-amber-48 font-extrabold'> Aligno
          </Link>
        </div>

        <div className="md:invisible visible md:absolute relative md:ml-0 ml-8">
          <form className="relative flex text-gray-400 focus-within:text-gray-600 mr-10 items-center">
            <LuSearch className="absolute w-5 h-5 ml-3 pointer-events-none" />
            <input type="text"
              id="search" name="search"
              placeholder="Search" aria-labelledby="Search"
              className="px-3 font-Roboto w-30 text-base font-medium py-1 border-none ring-2 pl-10 rounded ring-gray-300 focus:ring-grey-500 focus:ring-2" />
          </form>
        </div>

        {/* small screen */}

        <div className="text-3xl block md:invisible z-20">
          <button onClick={toggleNavbar}>{isOpen ? <IoCloseSharp /> : <LuSquareMenu />}</button>
        </div>

        {isOpen && (
          <div ref={dropdownRef} className="top-0 left-0 absolute h-screen w-screen z-10 bg-white text-center">
            <ul className="grid grid-rows-5 gap-6 justify-center mt-35 items-center font-Roboto text-md">
              <li>
                <Link to="/" className='hover:text-orange-225 font-Roboto text-base font-medium'> Home
                </Link>
              </li>

              <div
                className="flex items-center font-Roboto text-base font-medium gap-2 hover:text-orange-225 group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <li>Features</li>
                <SlArrowDown className="group-hover:rotate-180 transition delay-150 duration-300 ease-in-out text-xs" />
                {isHovered && (
                  <div className='absolute left-0 right-0 top-6 z-2'>
                  <div className="grid space-x-10 space-y-10 bg-white text-gray-600 shadow-md justify-center items-center text-center rounded-2xl p-5">
                    <div>
                      <Link to="/Main_task" className='mb-2 font-Roboto font-bold hover:text-orange-225'><MdTask className='inline text-xl' /> Task_management
                        <p className='text-sm font-poppins font-normal pt-2'>Create, organise and proritize tasks with ease </p> </Link>
                    </div>
                    <div>
                      <Link to="/Sign_up" className='mb-2 f font-Robotoont-bold hover:text-orange-225'><FaCalendarAlt className='inline text-xl' /> Calendars
                        <p className='text-sm font-poppins font-normal pt-2'>Book meetings with calendar integration</p>
                      </Link>
                    </div>
                    <div>
                      <Link to="/Main_team" className='mb-2 font-Roboto font-bold hover:text-orange-225'><RiTeamFill className='inline text-xl' /> Team Collaboration
                        <p className='text-sm font-poppins font-normal pt-2'>Collaborate in real time and manage teams </p> </Link>
                    </div>
                    <div>
                      <Link to="/Sign_up" className='mb-2 f font-Robotoont-bold hover:text-orange-225'><IoMdNotifications className='inline text-xl' /> Notifications
                        <p className='text-sm font-poppins font-normal pt-2'>Stay on track with reminders from notifications</p>
                      </Link>
                    </div>
                  </div>
                </div>
                )}
              </div>
              <li>
                <Link to="/Main_support" className='hover:text-orange-225 font-Roboto text-base font-medium'> Support
                </Link>
              </li>

              <Contact_us />
              <button>
                <li>
                  <Link to="/Sign_up" className="px-6 py-1.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-2 hover:text-amber-48"> Sign up
                  </Link>
                </li>
              </button>
            </ul>
          </div>
        )}


        

        {/* medium and large screens */}

        <div className="invisible md:visible absolute md:relative">
          <ul className="invisible md:visible md:flex gap-4 @5xl:gap-6 md:items-center font-Roboto text-sm @5xl:text-md">
            <li>
              <Link to="/" className=' hover:text-orange-225 font-Roboto text-base font-medium'> Home
              </Link>
            </li>

            <div
              className="flex items-center font-Roboto text-base font-medium gap-2 hover:text-orange-225 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <li>Features</li>
              <SlArrowDown className="group-hover:rotate-180  text-xs" />
              {isHovered && (
                <div className='absolute -left-40 top-6 z-2'>
                  <div className="grid grid-cols-2 space-x-10 space-y-10 bg-white text-gray-600 shadow-md h-70 w-160 rounded-2xl p-10">
                    <div>
                      <Link to="/Main_task" className='mb-2 font-Roboto font-bold hover:text-orange-225'><MdTask className='inline text-xl' /> Task_management
                        <p className='text-sm font-poppins font-normal pt-2'>Create, organise and proritize tasks with ease </p> </Link>
                    </div>
                    <div>
                      <Link to="/Sign_up" className='mb-2 font-Roboto font-bold hover:text-orange-225'><FaCalendarAlt className='inline text-xl' /> Calendars
                        <p className='text-sm font-poppins font-normal pt-2'>Book meetings with calendar integration</p>
                      </Link>
                    </div>
                    <div>
                      <Link to="/Main_team" className='mb-2 font-Roboto font-bold hover:text-orange-225'><RiTeamFill className='inline text-xl' /> Team Collaboration
                        <p className='text-sm font-poppins font-normal pt-2'>Collaborate in real time and manage teams </p> </Link>
                    </div>
                    <div>
                      <Link to="/Sign_up" className='mb-2 font-Roboto font-bold hover:text-orange-225'><IoMdNotifications className='inline text-xl' /> Notifications
                        <p className='text-sm font-poppins font-normal pt-2'>Stay on track with reminders from notifications</p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <li>
              <Link to="/Main_support" className=' hover:text-orange-225 font-Roboto text-base font-medium'> Support
              </Link>
            </li>

            <Contact_us />

            <form className="relative flex text-gray-400 focus-within:text-gray-600 ml-4 items-center">
              <LuSearch className="absolute w-5 h-5 ml-3 pointer-events-none" />
              <input type="text"
                id="search" name="search"
                placeholder="Search" aria-labelledby="Search"
                className="px-3 font-Roboto text-base @5xl:w-50 w-30 font-medium py-1 border-none ring-2 pl-10 rounded ring-gray-300 focus:ring-grey-500 focus:ring-2" />
            </form>

            <button>
              <li>
                <Link to="/Sign_up" className="px-6 py-1.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-2 hover:text-amber-48"> Sign up
                </Link>
              </li>
            </button>
          </ul>
        </div>
      </nav>


    </div>
  );
};

export default Header;
