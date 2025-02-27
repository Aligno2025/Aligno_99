import React from 'react'
import { IoBriefcaseOutline } from "react-icons/io5";
import { VscFiles } from "react-icons/vsc";
import { MdOutlineLaptop } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import file from '../assets/img/file.png'
import team from '../assets/img/team.png'




const Sectors = () => {
  return (
    <div class='pt-10 pb-10'>
    

      <div class=' grid md:grid-cols-5 gap-4 justify-center items-center text-center pr-20 pl-20'>

      <span class='border-1 font-Roboto text-base rounded-xl p-8 px-20 md:px-0 border-orange-225 flex flex-col items-center justify-center'> 
      <IoBriefcaseOutline class='text-4xl text-purple-185' /> 
      <p>Professionals</p>
      </span>

      <span class='border-1 font-Roboto text-base rounded-xl p-8 border-orange-225 flex flex-col items-center justify-center'> 
      <img class='w-8' src={file} alt="" /> 
      <p>Enterpreneurs</p>
      </span>

      <span class='border-1 font-Roboto text-base rounded-xl p-8 border-orange-225 flex flex-col items-center justify-center'>
      <MdOutlineLaptop class='text-4xl text-purple-185' /> 
      <p>Freelancers</p>
      </span>
      <span class='border-1 font-Roboto text-base rounded-xl p-8 border-orange-225 flex flex-col items-center justify-center'> 
      <PiStudentBold class='text-4xl text-purple-185'/> 
      <p>Students</p>
      </span>
      <span class='border-1 font-Roboto text-base rounded-xl p-8 border-orange-225 flex flex-col items-center justify-center'>
      <img class='w-8' src={team} alt="" />
      <p>Team</p>
      </span>
      </div>

      <div class='text-center w-full mt-10'>
        <h1 class='font-poppins font-bold text-3xl'>For Teams and Individuals in all sectors</h1>
        <p class='font-Roboto text-base md:pr-70 md:pl-70'>Empowering teams and individuals across all sectors to stay organized, collaborate efficiently, and achieve their goals.</p>
      </div>
    </div>
  )
}

export default Sectors