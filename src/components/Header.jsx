import React, { useState, useEffect, useRef, useContext } from 'react';
import { SlArrowDown } from "react-icons/sl";
import { IoCloseSharp } from "react-icons/io5";
import { LuSearch, LuSquareMenu } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Contact_us from './Contact_us';
// import { logout } from './authAPI.jsx';
import { AuthContext } from '../components/AuthContext.jsx';
import FeaturesBtn from './FeaturesBtn.jsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);
  const modalRef = useRef(null);
  const { isLoggedIn, user, logout, loading } = useContext(AuthContext);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(dropdownRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
    }
  }, [isOpen]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

 
  
  const handleLogout = async () => {
    const { logout } = useContext(AuthContext);
  
    try {
      await logout(); // ✅ Calls API and clears user state in context
  
      // ✅ Redirect after logout
      window.location.href = "/Sign_in";
    } catch (err) {
      console.error('Logout failed:', err);
      alert('Logout failed. Please try again.');
    }
  };
  

  if (loading) {
    return <nav>Loading...</nav>; // or just return null
}


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

        <div className="text-3xl visible md:invisible z-20">
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
                  <FeaturesBtn /> // This component will be used to show the features dropdown

                )}
              </div>
              <li>
                <Link to="/Main_support" className='hover:text-orange-225 font-Roboto text-base font-medium'> Support
                </Link>
              </li>

              <Contact_us />

              {!isLoggedIn && <button>
                <li>
                  <Link to="/Sign_in" className="px-6 py-1.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-2 hover:text-amber-48"> Sign in
                  </Link>
                </li>
              </button>}

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
                <FeaturesBtn /> // This component will be used to show the features dropdown
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

            {!isLoggedIn ? (
              <li>
                <Link
                  to="/Sign_in"
                  className="px-6 py-1.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-2 hover:text-amber-48"
                >
                  Sign in
                </Link>
              </li>
            ) : (
              <li>
                <button
                  onClick={handleLogout}
                  className="px-6 py-1.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-2 hover:text-amber-48"
                >
                  Sign out
                </button>
              </li>
            )}


          </ul>
        </div>
      </nav>


    </div>
  );
};

export default Header;