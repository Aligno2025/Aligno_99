import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Header from '../Header';
import img1 from '../../assets/img/Sign_up_img1.png'
import img2 from '../../assets/img/Sign_up_img2.png'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";


gsap.registerPlugin(useGSAP);



const Sign_up = () => {

    const container = useRef();

    useGSAP(() => {
        gsap.from('.Sign_up-element', {
            opacity: 0,
            y: 50,
            duration: 1.5,
            stagger: 0.2,
            ease: 'power3.out',
        });
    }, { scope: container });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validate = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errors.email = 'Invalid email address';
        }
        if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Handle form submission
            console.log('Form submitted');
        }
    };

    return (
        <div ref={container} class='min-h-screen mb-20'>
            {/* Header stays on top with higher z-index */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Header />
      </div>
            <div class='md:grid  md:grid-cols-4 gap-1 pl-10 pr-10 bg-white'>

                <div class='md:relative md:visible invisible absolute Sign_up-element' >
                    <div class='md:w-70 md:mt-90'><img src={img1} alt="" /></div>
                </div>

                <div className="md:col-span-2 flex justify-center items-center Sign_up-element ">
                    <form onSubmit={handleSubmit} className=" p-10 md:max-w-full max-w-sm mt-30 border border-gray-300">
                        <h2 className="md:text-4xl text-2xl font-bold text-center text-amber-48 mb-2">Sign Up to Aligno</h2>
                        <p className="text-center text-gray-600 text-xs mb-6">Please sign up to continue</p>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm ">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                placeholder='nathbassey@gmail.com'
                                onChange={(e) => setEmail(e.target.value)}
                                className={`mt-1 p-2 w-full border-b-2 ${errors.password ? 'border-red-500' : 'border-gray-400 focus:border-gray-600'
                                    } bg-gray-100`}
                            />
                            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                        </div>

                        <div className="mb-4 relative">
                            <label className="block text-gray-700 text-sm">Password</label>

                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                placeholder='enoverlabIT&?'
                                onChange={(e) => setPassword(e.target.value)}
                                className={`mt-1 p-2 w-full border-b-2 ${errors.password ? 'border-red-500' : 'border-gray-400 focus:border-gray-600'
                                    } bg-gray-100`}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 p-2 text-gray-600"
                            >
                                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                            </button>
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                            <p className="text-gray-600 text-xs">It must be a combination of minimum 8 letters, numbers, and symbols.</p>
                        </div>

                        <div className="flex items-center mb-4">
                            <input type="checkbox" className="mr-2" />
                            <label className="text-gray-700 text-xs">Remember me</label>
                            <a href="#" className="ml-auto text-orange-225 text-xs">Forgot Password?</a>
                        </div>
                        <button type="submit" className="w-full bg-amber-48 text-white py-2">Sign Up</button>
                        <div className="text-center text-sm my-4 text-gray-600">Or Sign Up with:</div>
                        <div className="flex justify-center space-x-4 mb-4">
                            <button className="boader border-2 text-sm text-black p-1 md:pl-6 md:pr-8 pr-4 pl-2 hover:bg-amber-48 flex items-center space-x-2">
                                <FaGoogle />
                                <span>Google</span>
                            </button>
                            <button className="boader border-2 text-sm text-black p-1 md:pl-6 md:pr-8 pr-4 pl-2 hover:bg-amber-48 flex items-center space-x-2">
                                <FaApple />
                                <span>Apple</span>
                            </button>
                            <button className="boader border-2 text-sm text-black p-1 md:pl-6 md:pr-8 pr-4 pl-2 hover:bg-amber-48 flex items-center space-x-2">
                                <FaXTwitter />
                                <span>Twitter</span>
                            </button>
                        </div>
                        <div className="text-center">
                            <a href="#" className=" text-orange-225 text-sm">No account yet? Sign In</a>
                        </div>
                    </form>


                </div>

                <div class='invisible md:visible md:w-70 md:mt-40 absolute md:relative Sign_up-element'>
                    <img class='object-contain' src={img2} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Sign_up;
