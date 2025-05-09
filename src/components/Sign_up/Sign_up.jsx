import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaGoogle, FaApple, FaXTwitter, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import img1 from '../../assets/img/Sign_up_img1.png';
import img2 from '../../assets/img/Sign_up_img2.png';
import { IoCloseSharp } from "react-icons/io5";
// import { useEffect } from "react";



gsap.registerPlugin(useGSAP);

const Sign_in = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const container = useRef();
    const modalRef = useRef(null);

    useGSAP(() => {
        gsap.from('.Sign_up-element', {
            opacity: 0,
            y: 50,
            duration: 1.5,
            stagger: 0.2,
            ease: 'power3.out',
        });
    }, { scope: container });

    useEffect(() => {
        if (isModalOpen) {
            gsap.fromTo(modalRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 });
        }
    }, [isModalOpen]);

    

    // Form State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const validate = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            errors.email = 'Invalid email address';
        }
        if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }
        if (confirmPassword !== password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

     // Scroll page from top on load
    

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

 
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!validate()) return;
    
        try {
          const res = await fetch("https://aligno-server.onrender.com/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              email,
              password,
              confirmPassword,
            }),
          });
            console.log(res);
    
          const data = await res.json();
    
          if (!res.ok) {
            throw new Error(data.message || "Signup failed");
          }
    
          alert("Signup successful!");
          closeModal();
          window.location.href = "/Sign_in";
        } catch (err) {
          alert(err.message);
        }
      };



    const closeModal = () => {
        setIsModalOpen(!isModalOpen);
      };
  

      const togglePasswordVisibility = () => setShowPassword(!showPassword);
      const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);
  
    return (
        <div ref={container} className='mb-20'>
            <div onClick={() => setIsModalOpen(true)} className="hover:text-orange-225 font-Roboto text-orange-225 text-sm relative cursor-pointer text-center">No account yet? Sign Up</div>

            {isModalOpen && (
                <div className="absolute top-0 left-0 h-dvh w-dvw inset-0 flex justify-center items-center bg-gray-500/70  z-60">
                    <div ref={modalRef} className="bg-white p-6 mt-20 rounded-lg shadow-lg">

                         <button
                                      type="button"
                                      onClick={closeModal}
                                      className="absolute md:right-2 md:top-2 right-3  top-5 text-2xl text-red-950 z-40"
                                    >
                                      {isModalOpen ? <IoCloseSharp /> : close}
                                    </button>

                        <div className="md:col-span-2 flex flex-col items-center Sign_up-element ">
                            <form onSubmit={handleSubmit} className="w-full max-w-sm">
                                <h2 className="text-2xl font-bold text-center text-amber-48 mb-2">Sign up to Aligno</h2>
                                <p className="text-center text-gray-600 text-xs mb-6">New user, sign up to continue</p>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm">Email Address</label>
                                    <input
                                        type="email"
                                        value={email}
                                        placeholder='nathbassey@gmail.com'
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={`mt-1 p-2 w-full border-b-2 bg-gray-100 ${errors.email ? 'border-red-500' : 'border-gray-400 focus:border-gray-600'}`}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                                </div>
                                 {/* Password Field */}
                                <div className="mb-4 relative">
                                    <label className="block text-gray-700 text-sm">Password</label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        placeholder='enoverlabIT&?'
                                        onChange={(e) => setPassword(e.target.value)}
                                        className={`mt-1 p-2 w-full border-b-2 bg-gray-100 ${errors.password ? 'border-red-500' : 'border-gray-400 focus:border-gray-600'}`}
                                    />
                                    <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 p-2 text-gray-600">
                                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                    </button>
                                    {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                                    <p className="text-gray-600 text-xs">It must be a combination of minimum 8 letters, numbers, and symbols.</p>
                                    </div>
                                {/* Confirm Password Field */}
                                <div className="relative">
                                        <label className="block text-gray-700 text-sm">Confirm Password</label>
                                        <input
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            value={confirmPassword}
                                            placeholder="Re-enter password"
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className={`mt-1 p-2 w-full border-b-2 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-400 focus:border-gray-600'} bg-gray-100`}
                                        />
                                        <button type="button" onClick={toggleConfirmPasswordVisibility} className="absolute inset-y-0 right-0 pt-6 p-2 text-gray-600">
                                            {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                        </button>
                                        {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
                                       </div>
                             
                        
                                <button type="submit" className="w-full bg-amber-48 text-white py-2 mt-4">Sign up</button>
                            </form>
                        </div>
                    
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sign_in;
