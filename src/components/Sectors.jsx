import React from 'react'
import { IoBriefcaseOutline } from "react-icons/io5";
import { VscFiles } from "react-icons/vsc";
import { MdOutlineLaptop } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import file from '../assets/img/file.png'
import team from '../assets/img/team.png'




const Sectors = () => {
  return (

    <div class='pt-10 md:pb-20 pb-10 @container'>
    

      <div class=' grid md:grid-cols-5 gap-4 justify-center items-center text-center @5xl:pr-20 @5xl:pl-20 pr-10 pl-10'>

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

      <div class='text-center w-full mt-10'>
        <h1 class='font-poppins font-bold md:text-3xl text-2xl pl-10 pr-10'>For Teams and Individuals in all sectors</h1>
        <p class='font-Roboto md:text-base text-sm @5xl:pr-70 @5xl:pl-70 pl-10 pr-10 mt-4'>Empowering teams and individuals across all sectors to stay organized, collaborate efficiently, and achieve their goals.</p>
      </div>
    </div>
  )
}

export default Sectors