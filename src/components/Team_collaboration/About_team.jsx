import React from 'react'
import { Link } from 'react-router-dom'


const About_team = () => {
  return (
    <div className='md:mb-10 mb-8'>
      <div className='bg-linear-to-t  from-arrow-purple-104 to-light-red-181 md:h-80 h-90'>
        <div>
<<<<<<< HEAD
          <div className='md:pl-20 pl-10 pt-10 md:pr-150 pr-10'>
            <div >
              <h1 className="font-poppins text-2xl font-extrabold md:pr-50">About Team Management Feature</h1>
              <p className='font-Roboto text-base font-normal md:p-10 p-6 md:pr-40 pl-0'>Keep everyone on the same page with built in communication tools , file sharing and real time updates </p>
=======
          <div class='pl-10 md:pt-16 pt-10 md:pr-[64%]'>
            <div >
              <h1 class="font-poppins text-2xl font-extrabold pr-5">About Team Management Feature</h1>
              <p class='font-Roboto text-base font-normal pt-10 pb-10'>Keep everyone on the same page with built in communication tools , file sharing and real time updates </p>
>>>>>>> ced7316 (new ajustment)
            </div>

            <button >
              <Link to="/Sign_up" className="px-4 md:px-8 py-2.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-amber-48 border-2 hover:text-amber-48" smooth>
                Show Demo
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About_team