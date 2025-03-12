<<<<<<< HEAD


import React from 'react'
import img6 from '../assets/img/Steps_img1.png'
import img7 from '../assets/img/Steps_img2.png'
import img8 from '../assets/img/Steps_img3.png'
import { Link } from 'react-router-dom'

function Boards(props) {

    return (
     
        <div className={`pt-4 pl-4 pr-4 md:pb-30 pb-[40%] rounded-2xl  mt-6 ${props.bgColor} ${props.textColor}`}>
            <div className='pl-2 md:mt-4 mt-2 '>
                <h1 className='text-2xl font-bold font-poppins'>{props.bigtext}</h1>
                <p className='text-sm font-lg font-Roboto pr-0 pl-0 p-6'>{props.smalltext}</p>
            </div>
            <div className='grid grid-cols-2 gap-1 md:gap-4 mt-2 md:mt-6'>
                <button>
                    <Link to="/Sign_up" className="md:px-6 px-2 py-3 bg-amber-48 font-Roboto md:text-base text-xs font-medium text-white hover:bg-white hover:text-amber-48 border-2 border-amber-48">
                        {props.btn}
                    </Link>
                </button>
                <div className='relative'><img className='absolute w-[70%]' src={props.img} alt="" /></div>
            </div>
        </div>
    )
}

const Three_steps = () => {
    return (
        <div >
            <div className='pl-10 pr-10 md:pb-10 pb-6'>
                <h1 className='text-center font-poppins text-3xl font-semibold'>Get Started in 3 simple steps</h1>

                <div className='grid md:grid-cols-3 md:gap-10 gap-2'>

                    <Boards
                        bigtext='Sign Up for Free'
                        smalltext='Our features have been built for ease and productivity'
                        btn='Sign in'
                        img={img6}
                        bgColor='bg-light-purple-185 hover:bg-light-purple-185/80'
                        textColor='text-white'
                    />

                    <Boards
                        bigtext='Organize your tasks'
                        smalltext='Our range of resources are designed to help you get the most out of our platform.'
                        btn='Request Demo'
                        img={img7}
                        bgColor='bg-light-orange-225 hover:bg-light-orange-225/80'
                    />

                    <Boards
                        bigtext='Achieve your goals'
                        smalltext='join us on our innovate journey to make work easier and more productive'
                        btn='Get Started'
                        img={img8}
                        bgColor='bg-light-ambere-48 hover:bg-light-ambere-48/80'
                        textColor='text-white'
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Three_steps
=======
import React from 'react';
import { Link } from 'react-router-dom';
import img6 from '../assets/img/Steps_img1.png';
import img7 from '../assets/img/Steps_img2.png';
import img8 from '../assets/img/Steps_img3.png';

function Boards({ bigtext, smalltext, btn, img, bgColor, padding, btnSize }) {
  return (
    <div className={`rounded-2xl ${bgColor} text-white p-4 md:p-4 hover:shadow-lg transition-all duration-300`}>
      <div >
        <h1 className="text-2xl font-bold font-poppins">{bigtext}</h1>
        <p className="text-sm font-lg font-Roboto h-16">{smalltext}</p>
      </div>
      <div className="flex flex-row justify-between items-center ">
        <button className="px-2 md:px-6 py-2 bg-amber-48 font-Roboto text-xs font-medium text-white border-2 border-amber-48 hover:bg-gray-50/5 hover:text-white transition-all duration-300">
          <Link to="/Sign_up">{btn}</Link>
        </button>
        <div>
          <img className="h-30 w-30 object-contain" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

const Three_steps = () => {
  return (
    <div className="md:pl-10 md:pr-10 md:pb-20 md:pt-10 p-5 @container">
      <h1 className="text-center font-poppins text-3xl font-semibold">Get Started in 3 Simple Steps</h1>

      <div className="grid md:grid-cols-3 md:gap-6 gap-4 mt-6">
        <Boards
          bigtext="Sign Up for Free"
          smalltext="Our features have been built for ease and productivity."
          btn="Sign in"
          img={img6}
          bgColor="bg-light-purple-185"
          padding="p-4"
        />

        <Boards
          bigtext="Organize Your Tasks"
          smalltext="Our range of resources are designed to help you get the most out of our platform."
          btn="Request Demo"
          img={img7}
          bgColor="bg-light-orange-255"
          padding="p-4"
        />

        <Boards
          bigtext="Achieve Your Goals"
          smalltext="Join us on our innovative journey to make work easier and more productive."
          btn="Get Started"
          img={img8}
          bgColor="bg-light-ambere-48"
          padding="p-4"
        />
      </div>
    </div>
  );
};

export default Three_steps;
>>>>>>> ced7316 (new ajustment)
