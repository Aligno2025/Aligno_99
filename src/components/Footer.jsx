import React, {useContext} from 'react'
import { MdOutlineMail } from "react-icons/md";
import img2 from "../assets/img/Google_button.png";
import img1 from "../assets/img/App_button.png";
import { GrYoutube } from "react-icons/gr";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { AuthContext } from './AuthContext.jsx';

function Footext({ h1, links }) {

    return (
        <div>
            <h1 className="font-Roboto font-bold text-lg pb-4">{h1}</h1>
            <div className="grid grid-rows-4 gap-2">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={link.to}
                        className=""
                        smooth="true"
                    >
                        {link.text}
                    </Link>
                ))}
            </div>
        </div>
    )

}

const linksSetOne = [
    { to: '/Main_task', text: 'Task management' },
    { to: '/Main_team', text: 'Team collaboration' },
    { to: '/Sign_up', text: 'Notifications' },
    { to: '/Sign_up', text: 'Calendar Integration' }
];

const linksSetTwo = [
    { to: '/', text: 'Terms and Condition' },
    { to: '/', text: 'Cookie policy' },
    { to: '/Main_support', text: 'Customer support' },
    // { to: '/faq', text: 'FAQ' }
];
const linksSetThree = [
    { to: '/', text: 'Home page' },
    { to: '/Main_support', text: 'Support' },
    { to: '/Main_support', text: 'FAQs' },
    { to: '/Sign_up', text: 'Sign up' }
];

function Socials({ links }) {

    return (
        <div>

            <div className="className=' flex gap-2 p-4 pl-0 md:text-2xl text-lg'">

                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={link.to}
                        className=""
                        smooth="true"
                    >
                        {link.logo}
                    </Link>
                ))}
            </div>
        </div>


    )

}

const linksSocial = [
    { to: '/', logo: <GrYoutube /> },
    { to: '/', logo: <FaSquareFacebook /> },
    { to: '/', logo: <FaXTwitter /> },
    { to: '/', logo: <AiFillInstagram /> },
    { to: '/', logo: <FaLinkedin /> }
];



const Footer = () => {
const { isLoggedIn, logout } = useContext(AuthContext);

    return (

        <div className=' pr-10 pl-10 pb-8 pt-10'>
            <div className='grid md:grid-cols-2 gap-10'>
                <div className='order-2 md:order-1'>
                    <h1 className="font-poppins text-2xl text-amber-48 font-extrabold">Aligno</h1>
                    <p className='font-Roboto text-base font-normal p-10 md:pr-40 pl-0'>The ultimate productivity tool to streamline task management, set deadlines and collaborate effectively, all in one place</p>
                </div>
                <div className='grid md:justify-end justify-center items-center text-center order-1 md:order-2'>
                    <form action="" className="relative flex text-gray-400  focus-within:text-gray-600  items-center">
                        <MdOutlineMail className='absolute w-5 h-5 ml-3 pointer-events-none' />
                        <input
                            type="text"
                            id="fname"
                            name="fname"
                            placeholder='Enter your email to get the notifi....'
                            aria-labelledby='Enter your email to get the notifi....'
                            className='px-10 w-[60%]  md:w-[50%] h-9 mt-1  font-Roboto text-sm md:text-base font-medium md:py-1 py-1.5 border-none ring-2 pl-10 ring-gray-300 focus:ring-grey-500 focus:ring-2'
                        />

                         {!isLoggedIn ? (
                            <button >
                            <Link to="/Sign_up" className="px-4 md:px-8 py-2.5 ml-1 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-2 hover:text-amber-48"  smooth="true">
                                Sign In
                            </Link>
                        </button>
                        ) : (
                            <button >
                            <Link to="/" className="px-4 md:px-8 py-2.5 ml-1 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-2 hover:text-amber-48"  smooth="true">
                                Sign In
                            </Link>
                        </button>
                        )}


                    </form>
                </div>
            </div>

            <div className='grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-5'>

                <Footext h1="Features" links={linksSetOne} />
                <Footext h1="Legal" links={linksSetTwo} />
                <Footext h1="Quick Links" links={linksSetThree} />


                <div>
                    <h1 className='font-Roboto font-medium text-lg pb-4'>Socials</h1>
                    <div className='flex gap-2 pb-3'>
                    {!isLoggedIn &&  <Link to="/Sign_up" className='md:h-14 h-10 md:w-20 w-[80%] object-fill'>
                            <img src={img1} alt="" />
                        </Link>}

                        
                        {!isLoggedIn ? (
                            <Link to="/Sign_up" className='md:h-14 h-10 md:w-20 w-[80%] object-fill' >
                            <img src={img2} alt="" />
                        </Link>
                        ) : (
                            <Link to="/" className='md:h-14 h-10 md:w-20 w-[80%] object-fill' >
                            <img src={img2} alt="" />
                        </Link>
                        )}

                        
                        
                    </div>

                    <p>Join Us</p>

                    {/* Social media */}
                    <div >
                        <Socials links={linksSocial} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer