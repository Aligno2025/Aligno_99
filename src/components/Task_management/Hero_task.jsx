import React from 'react'
import img1 from '../../assets/img/Team_img1.png'
import { Link } from 'react-router-dom'


const Hero_task = () => {
  return (
    <div class='bg-linear-to-t from-arrow-purple-104 to-light-red-181 h-dvh'>


      <div class='grid md:grid-cols-2 justify-center items-center p-10 md:pt-20 '>
        <div class='md:p-20 mt-10'>
          <h1 class='text-orange-225 font-black text-4xl'>Task Management</h1>
          <p class='mt-10'>Create, organize and prioritize tasks effortlessly with a user friendly interface that makes staying on top your workload a breeze.</p>

          <button class='mt-15'>
            <Link to="/Sign_up" class="px-12  py-4 bg-amber-48 border-amber-48 font-Roboto text-base font-medium text-white hover:bg-gray-50/5 border-2 hover:text-amber-48" smooth>
              Get Started
            </Link>
          </button>
        </div>
        <div class='w-[70%] mx-10'>
          <img src={img1} alt="" />
        </div>
      </div>
    </div>


  )
}

export default Hero_task