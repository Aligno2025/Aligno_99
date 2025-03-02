import React from 'react'
import { IoBriefcaseOutline } from "react-icons/io5";
import { VscFiles } from "react-icons/vsc";
import { MdOutlineLaptop } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import file from '../assets/img/file.png'
import team from '../assets/img/team.png'




const Sectors = () => {
  return (
    <div className='md:pt-10 pt-2 md:pb-10 pb-4 '>
    

      <div className=' grid md:grid-cols-5 gap-4 justify-center items-center text-center pr-20 pl-20'>

      <span className='border-1 font-Roboto text-base rounded-xl p-8 px-20 md:px-0 border-orange-225 flex flex-col items-center justify-center'> 
      <IoBriefcaseOutline className='text-4xl text-purple-185' /> 
      <p>Professionals</p>
      </span>

      <span className='border-1 font-Roboto text-base rounded-xl p-8 border-orange-225 flex flex-col items-center justify-center'> 
      <img className='w-8' src={file} alt="" /> 
      <p>Enterpreneurs</p>
      </span>

      <span className='border-1 font-Roboto text-base rounded-xl p-8 border-orange-225 flex flex-col items-center justify-center'>
      <MdOutlineLaptop className='text-4xl text-purple-185' /> 
      <p>Freelancers</p>
      </span>
      <span className='border-1 font-Roboto text-base rounded-xl p-8 border-orange-225 flex flex-col items-center justify-center'> 
      <PiStudentBold className='text-4xl text-purple-185'/> 
      <p>Students</p>
      </span>
      <span className='border-1 font-Roboto text-base rounded-xl p-8 border-orange-225 flex flex-col items-center justify-center'>
      <img className='w-8' src={team} alt="" />
      <p>Team</p>
      </span>
      </div>

      <div className='text-center w-full mt-10 pl-8 pr-8'>
        <h1 className='font-poppins font-bold text-3xl'>For Teams and Individuals in all sectors</h1>
        <p className='font-Roboto text-base md:pr-70 md:pl-70'>Empowering teams and individuals across all sectors to stay organized, collaborate efficiently, and achieve their goals.</p>
      </div>
    </div>
  )
}

export default Sectors