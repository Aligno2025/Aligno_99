import React, { useState, useRef, useContext } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaGoogle, FaApple } from "react-icons/fa";
import { FaXTwitter, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Header from '../Header';
import img1 from '../../assets/img/Sign_up_img1.png';
import img2 from '../../assets/img/Sign_up_img2.png';
import Sign_up from '../../components/Sign_up/Sign_up';
import { AuthContext } from '../AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(useGSAP);

const Sign_in = () => {
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

    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();


    const validate = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(form.email)) {
            errors.email = 'Invalid email address';
        }
        if (form.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            await login(form);
            console.log('Login successful');
            setMessage('Login successful!');
            alert('Login successful!');
            navigate('/'); // ← this navigates without reloading

        } catch (err) {
            console.error(err);
            const errorMessage =
                err?.response?.data?.message || err?.message || 'Login failed';
            setMessage(errorMessage);
            alert('Login failed!');
        }
    };

    
    return (
        <div ref={container} className='mb-20'>
            <div className='absolute z-10 w-full'>
                <Header />
            </div>

            <div className='bg-white'>
                <div className='absolute md:visible invisible top-[90%] left-8 Sign_up-element'>
                    <div className='h-45 w-[80%] object-contain'>
                        <img src={img1} alt="Sign up illustration 1" />
                    </div>
                </div>

                <div className='invisible md:visible right-4 top-20 absolute Sign_up-element'>
                    <img className='h-45 w-[80%] object-contain' src={img2} alt="Sign up illustration 2" />
                </div>

                <div className="flex justify-center items-center Sign_up-element">
                    <div className='md:p-10 p-5 border border-gray-300'>
                        <form onSubmit={handleSubmit} className="md:max-w-full max-w-sm mt-20">
                            <h2 className="md:text-4xl text-2xl font-bold text-center text-amber-48 mb-2">Sign in to Aligno</h2>
                            <p className="text-center text-gray-600 text-xs mb-6">Please sign in to continue</p>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    placeholder='nathbassey@gmail.com'
                                    onChange={handleChange}
                                    className={`mt-1 p-2 w-full border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-400 focus:border-gray-600'} bg-gray-100`}
                                />
                                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                            </div>

                            <div className="mb-4 relative">
                                <label className="block text-gray-700 text-sm">Password</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={form.password}
                                    placeholder='enoverlabIT&?'
                                    onChange={handleChange}
                                    className={`mt-1 p-2 w-full border-b-2 ${errors.password ? 'border-red-500' : 'border-gray-400 focus:border-gray-600'} bg-gray-100`}
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

                            <button type="submit" className="w-full bg-amber-48 text-white py-2">Sign in</button>

                            <div className="text-center text-sm my-4 text-gray-600">Or Sign in with:</div>
                        </form>

                        <div className="flex justify-center space-x-4 mb-4">
                            <button className="border-2 text-sm text-black p-1 md:pl-4 md:pr-4 pr-4 pl-2 hover:bg-amber-48 flex items-center space-x-2">
                                <FaGoogle />
                                <span>Google</span>
                            </button>
                            <button className="border-2 text-sm text-black p-1 md:pl-4 md:pr-4 pr-4 pl-2 hover:bg-amber-48 flex items-center space-x-2">
                                <FaApple />
                                <span>Apple</span>
                            </button>
                            <button className="border-2 text-sm text-black p-1 md:pl-4 md:pr-4 pr-4 pl-2 hover:bg-amber-48 flex items-center space-x-2">
                                <FaXTwitter />
                                <span>Twitter</span>
                            </button>
                        </div>

                        <div>
                            <Sign_up />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sign_in;

