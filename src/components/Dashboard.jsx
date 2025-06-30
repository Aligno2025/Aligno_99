import React, { useContext, useState, useEffect, useRef } from 'react';
import Graph from './Graph';
import { SlArrowDown, SlPlane } from 'react-icons/sl';
import { GoHome } from 'react-icons/go';
import { MdOutlineFolderCopy, MdOutlineSettings } from 'react-icons/md';
import { LiaTagsSolid } from 'react-icons/lia';
import { GrGallery } from 'react-icons/gr';
import { FiSearch } from 'react-icons/fi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { AiOutlineTeam } from 'react-icons/ai';
import { AuthContext } from '../components/AuthContext.jsx';
import { useNavigate, Link } from 'react-router-dom';
import gsap from 'gsap';

const Dashboard = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const logoRef = useRef(null);
  const btnRef = useRef(null);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/Sign_in');
    } catch (err) {
      console.error('Logout failed:', err);
      alert('Logout failed. Please try again.');
    }
  };

 useEffect(() => {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    if (menuOpen) {
      gsap.to(sidebarRef.current, { x: 0, duration: 0.4, ease: 'power2.out' });
      gsap.to(btnRef.current, { x: '70vw', duration: 0.4, ease: 'power2.out' });
      gsap.to(logoRef.current, { opacity: 0, duration: 0.3 });
    } else {
      gsap.to(sidebarRef.current, { x: '-100%', duration: 0.4, ease: 'power2.in' });
      gsap.to(btnRef.current, { x: 0, duration: 0.4, ease: 'power2.in' });
      gsap.to(logoRef.current, { opacity: 1, duration: 0.3 });
    }
  }
}, [menuOpen]);


  return (
    <div className={`grid md:grid-cols-4 bg-white ${!isLoggedIn ? '-rotate-2 rounded-2xl md:p-10 p-2 md:mt-10 mt-5' : ''} md:gap-4 gap-2`}>

      {/* Toggle Button (attached to sidebar edge) */}
      <div
        className='md:hidden fixed top-5 z-50'
        ref={btnRef}
        style={{ left: 0 }}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='bg-amber-48 text-white px-3 py-1 rounded-r-lg shadow-lg'
        >
          {menuOpen ? '←' : '☰'}
        </button>
      </div>

      {/* Aligno Logo on Mobile (right, fades) */}
      
      <div
        ref={logoRef}
        className='md:hidden fixed top-5 right-5 z-40 text-amber-48 font-poppins text-2xl font-extrabold transition-opacity duration-300'
      >
        Aligno
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className='bg-amber-48 text-white z-40 md:relative fixed top-0 left-0 h-full w-[70%] md:w-auto transform -translate-x-full md:translate-x-0'
      >
        <h1 className='font-poppins text-2xl pl-5 pt-2 font-extrabold hidden md:block'>Aligno</h1>

        <div className='font-Roboto text-sm font-medium'>
          <ul className='grid grid-rows-5 gap-2 pt-6 pl-5'>
            <Link to="/"><li><GoHome className='inline text-lg' /> Home</li></Link>
            <li><MdOutlineFolderCopy className='inline text-lg' /> Feed</li>
            <li><LiaTagsSolid className='inline text-lg' /> Calender</li>
            <li><GrGallery className='inline text-lg' /> Projects</li>
            <div className='flex justify-between items-center w-[90%]'>
              <li><SlPlane className='inline text-lg' /> Notification</li>
              <div className='flex'>
                <p className='mr-2 bg-orange-225 rounded-full text-xs px-1 py-.5'>99+</p>
                <SlArrowDown className='text-xs' />
              </div>
            </div>
          </ul>

          <div className='bg-purple-overlay-104 mt-5'>
            <ul className='grid grid-rows-7 gap-2 pt-6 font-Roboto text-md pl-5'>
              <li>Work Overview</li>
              <li>Features</li>
              <li>Projects</li>
              <li>Milestone</li>
              <li>Tasks</li>
              <li>Report</li>
            </ul>
          </div>
        </div>

        <p className='pl-5 mt-5'><MdOutlineSettings className='inline text-xl' /> Settings</p>

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className='px-6 py-1.5 bg-white text-amber-48 font-Roboto text-base font-medium hover:text-yellow-500 m-5 rounded'
          >
            Sign out
          </button>
        )}
      </div>

      {/* Main Content */}
      <div className='md:col-span-3 p-5 transition-all duration-300 mt-12 md:mt-0'>
        <div className='border-b border-gray-300 pb-2'>
          <div className='flex justify-between text-2xl font-bold'>
            <h1><AiOutlineTeam className='inline' /> Team 99</h1>
            <div className='flex gap-2'>
              <MdOutlineSettings />
              <FiSearch />
              <div className='relative'>
                <p className='mr-10 bg-orange-225 rounded-full text-xs px-1 absolute -top-2 -right-10'>9</p>
                <IoNotificationsOutline />
              </div>
            </div>
          </div>

          <ul className='flex flex-row justify-evenly font-Roboto text-sm pt-2'>
            <li className='hover:text-orange-225'>Dashboard</li>
            <li className='hover:text-orange-225'>Projects</li>
            <li className='hover:text-orange-225'>Tasks</li>
            <li className='hover:text-orange-225'>Milestone</li>
            <li className='hover:text-orange-225'>Report</li>
          </ul>
        </div>

        <div className='grid md:grid-cols-2 md:grid-rows-2 gap-4 mt-4 text-xl'>
          <div>
            <h1 className='text-amber-48 font-bold mb-5'>All Tasks</h1>
            <div className='text-gray-500 text-sm'>
              <div className='grid grid-cols-2 border border-gray-300 p-5 rounded-2xl'>
                <div className='grid gap-2'>
                  <p>Week 1</p>
                  <p>Week 2</p>
                  <p>Week 3</p>
                  <p>Week 4</p>
                </div>
                <div className='grid gap-4'>
                  <p>Product Research</p>
                  <p>Design</p>
                  <p>Development</p>
                  <p>Testing</p>
                </div>
              </div>
            </div>
          </div>

          <div className='order-last md:order-none'>
            <h1 className='font-bold'> <span className='text-orange-225 mr-10'>Analytics</span> Progress</h1>
            <Graph />
          </div>

          <div>
            <div className='border border-gray-300 p-2 rounded-2xl'>
              <h1 className='font-bold text-xl'>Target</h1>
              <div className='flex gap-4 text-sm text-gray-500'>
                <p><span className='p-1.5 rounded-2xl inline-block mr-2 bg-orange-225'></span>Achieved</p>
                <p><span className='p-1.5 rounded-2xl inline-block mr-2 bg-gray-300'></span>Remaining</p>
              </div>
              <div className='relative size-30 mt-5 ml-6'>
                <svg className='rotate-[135deg] size-full' viewBox='0 0 36 36'>
                  <circle cx='18' cy='18' r='16' fill='none' className='stroke-current text-gray-300' strokeWidth='3.5' strokeDasharray='75 100' strokeLinecap='round'></circle>
                  <circle cx='18' cy='18' r='16' fill='none' className='stroke-current text-orange-225' strokeWidth='3.5' strokeDasharray='50 100' strokeLinecap='round'></circle>
                </svg>
                <div className='absolute top-1/2 start-1/2 transform -translate-x-1/2 text-center'>
                  <span className='text-xl font-bold text-orange-225'>67%</span>
                </div>
              </div>
            </div>
          </div>

          <div className='order-first md:order-last'>
            <h1 className='font-bold text-2xl'>All in one intuitive <span className='text-amber-48 font-extrabold'>Dashboard</span></h1>
            <p className='text-sm mt-2 text-gray-500'>Create, organize, and prioritize tasks with ease with our all in one intuitive dashboard</p>
            <a href='' className='text-sm text-blue-900 font-medium'>Learn more about Aligno</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
