import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthContext.jsx'

const About_team = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);


  return (
    <div className='md:mb-10 mb-8'>
      <div className='bg-linear-to-t  from-arrow-purple-104 to-light-red-181 md:h-80 h-90'>
        <div>

          <div class='pl-10 md:pt-10 pt-10 md:pr-[54%]'>
            <div >
              <h1 class="font-poppins text-2xl font-extrabold pr-5">About Team Management Feature</h1>
              <p class='font-Roboto text-base font-normal pt-10 pb-10'>Keep everyone on the same page with built in communication tools , file sharing and real time updates </p>
            </div>

            {!isLoggedIn && <button >
              <Link to="/Sign_up" className="px-4 md:px-8 py-2.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-amber-48 border-2 hover:text-amber-48" smooth>
                Show Demo
              </Link>
            </button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About_team