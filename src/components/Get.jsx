import React from 'react'
import img1 from '../assets/img/Mobile_img.png'
import { Link } from 'react-router-dom'

const Get = () => {
    return (
<<<<<<< HEAD
        <div className='grid md:grid-cols-4 gap-4 md:p-10 p-4 pl:10 pr:10 md:pl-20 md:pr-20'>
            <div className='col-span-2'>
                <h1 className='md:text-5xl text-3xl font-bold font-Roboto'>Get Aligno App</h1>
                <p className='pb-16 pt-10 pl-0 pr-0 font-Roboto text-md'>Aligno helps you organise tasks in a smarter, more efficient way. Whether you’re managing [specific tasks], collaborating with teammates, or organizing your day,</p>
=======
        <div class='grid md:grid-cols-4 gap-4  p-8 pl:10 pr:10 md:pr-20'>
            <div class='col-span-2'>
                <h1 class='md:text-6xl text-3xl font-bold font-Roboto md:pt-16'>Get Aligno App</h1>
                <p class='pb-16 pt-10 pl-0 pr-0 font-Roboto text-md'>Aligno helps you organise tasks in a smarter, more efficient way. Whether you’re managing [specific tasks], collaborating with teammates, or organizing your day,</p>
>>>>>>> ced7316 (new ajustment)

                <button >
                    <Link to="/Sign_up" className="px-8  py-4 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-2 hover:text-amber-48" >
                        Get Started
                    </Link>
                </button>
            </div>
            <div className='col-span-2 mt-8 md:mt-0'>
                <img className='h-full w-full object-contain ' src={img1} alt="" />
            </div>
        </div>
    )
}

export default Get