import React, {useContext} from 'react'
import { GiCheckMark } from "react-icons/gi";
import Contact_us from '../Contact_us';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext.jsx';


const Hero_support = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const items = [
    'Setting up your workspace',
    'Onboarding your team',
    'Creating an account'
  ];



  return (
    <div>
      <div className='grid md:grid-cols-2 justify-center items-center p-10 pt-20 '>
        <div className=''>
          <div className='md:pr-16 pr-0 md:pl-16 pl-0 pt-10'>
            <h1 className='md:text-4xl text-3xl font-bold font-Poppins '>Need Help to Get Started?</h1>
            <p className='mt-6 m:pr-10'>Whether you're new to Aligno or just need help navigating its features, we're here to guide you every step of the way</p>
            <ul className="list-decimal list-inside space-y-4 mt-10 mb-16 font-bold">
              {items.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-purple-600 mr-8 font-bold text-2xl"><GiCheckMark /></span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="px-4 md:px-8 py-2.5 bg-amber-48 font-Roboto text-sm md:text-base font-medium text-white hover:bg-white border-2 hover:text-amber-48">
              <Contact_us />
            </button>

          </div>
        </div>
        <div className='relative pt-10 md:pt-0'>
          <span className='md:pt-110 pr-2 md:left-1 rounded inline-block bg-orange-225 absolute md:visible invisible'></span>
          <div className='md:ml-30'>
            <h1 className='md:text-4xl text-3xl font-bold font-Poppins md:pr-30'>Personalised Support</h1>
            <p className='mt-6 pr-10'>Whether you're new to Aligno or just need help navigating its features, we're here to guide you every step of the way</p>
            <ul className="list-decimal list-inside space-y-4 mt-10 mb-16 font-bold">
              {items.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-purple-600 mr-8 font-bold text-2xl"><GiCheckMark /></span>
                  {item}
                </li>
              ))}
            </ul>
            {!isLoggedIn && <button>
              <Link to="/Sign_up" className="px-4 md:px-8 py-2.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-2 hover:text-amber-48"> Schedule call
              </Link>

            </button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero_support