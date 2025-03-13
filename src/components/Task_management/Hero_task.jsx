import React from 'react'
import img1 from '../../assets/img/Team_img1.png'
import { Link } from 'react-router-dom'


const Hero_task = () => {
  return (
    <div class='bg-linear-to-t from-arrow-purple-104 to-light-red-181'>
      <div className='grid md:grid-cols-2 justify-center items-center p-10 md:pt-30 md:pb-30 '>
        <div className='md:p-10 mt-5 order-last md:order-first'>
          <h1 className='text-orange-225 font-black md:text-4xl text-2xl'>Task Management</h1>
          <p className='md:mt-10 mt-2'>Create, organize and prioritize tasks effortlessly with a user friendly interface that makes staying on top your workload a breeze.</p>

          <button className='md:mt-15 mt-8'>
            <Link to="/Sign_up" className="px-12  py-4 bg-amber-48 border-amber-48 font-Roboto text-base font-medium text-white hover:bg-gray-50/5 border-2 hover:text-amber-48" smooth>
              Get Started
            </Link>
          </button>
        </div>
        <div className='w-[70%] mx-10 mt-8 md:mt-0 flex justify-center items-center'> 
          <img src={img1} alt="" />
        </div>
      </div>
    </div>


  )
}

export default Hero_task