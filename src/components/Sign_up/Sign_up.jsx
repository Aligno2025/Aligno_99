import React, { useState, useRef, useEffect, useContext } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
// import { register } from '../authAPI';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';


gsap.registerPlugin(useGSAP);

const Sign_in = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const container = useRef();
    const modalRef = useRef(null);
    const { login } = useContext(AuthContext);

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
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: ''
    });
    
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [message, setMessage] = useState('');
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
        if (form.confirmPassword !== form.password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            await register(form);
            setMessage('Registered successfully!');
            alert("Registration  successful!");
            closeModal();
            navigate('/Sign_in'); // ← this navigates without reloading



             // Automatically log in the user
             login(response.user || form); // You can also store token if available
             
        } catch (err) {
            console.error(err);
            const errorMessage =
                err?.response?.data?.message || err?.message || 'Registration failed';
            setMessage(errorMessage);
            alert("Registration failed!");
        }
        
    };


    return (
        <div ref={container} className='mb-20'>
            <div
                onClick={() => setIsModalOpen(true)}
                className="hover:text-orange-225 font-Roboto text-orange-225 text-sm relative cursor-pointer text-center"
            >
                No account yet? Sign Up
            </div>

            {isModalOpen && (
                <div className="fixed top-0 left-0 h-200 w-screen inset-0 flex justify-center items-center bg-gray-500/70 z-60">
                    <div ref={modalRef} className="bg-white p-6 mt-20 rounded-lg shadow-lg relative w-full max-w-md">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="absolute md:right-2 md:top-2 right-3 top-3 text-2xl text-red-950 z-40"
                        >
                            <IoCloseSharp />
                        </button>

                        <div className="md:col-span-2 flex flex-col items-center Sign_up-element">
                            <form onSubmit={handleSubmit} className="w-full">
                                <h2 className="text-2xl font-bold text-center text-amber-48 mb-2">Sign up to Aligno</h2>
                                <p className="text-center text-gray-600 text-xs mb-6">New user, sign up to continue</p>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        placeholder='nath bassey'
                                        onChange={handleChange}
                                        className={`mt-1 p-2 w-full border-b-2 bg-gray-100 `}
                                    />
                                    {/* {errors.name && (
                                        <p className="text-red-500 text-xs">{errors.name}</p>
                                    )} */}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        placeholder='nathbassey@gmail.com'
                                        onChange={handleChange}
                                        className={`mt-1 p-2 w-full border-b-2 bg-gray-100 ${errors.email ? 'border-red-500' : 'border-gray-400 focus:border-gray-600'}`}
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
                                        className={`mt-1 p-2 w-full border-b-2 bg-gray-100 ${errors.password ? 'border-red-500' : 'border-gray-400 focus:border-gray-600'}`}
                                    />
                                    <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 p-2 text-gray-600">
                                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                    </button>
                                    {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                                    <p className="text-gray-600 text-xs">It must be a combination of minimum 8 letters, numbers, and symbols.</p>
                                </div>

                                <div className="relative">
                                    <label className="block text-gray-700 text-sm">Confirm Password</label>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={form.confirmPassword}
                                        placeholder="Re-enter password"
                                        onChange={handleChange}
                                        className={`mt-1 p-2 w-full border-b-2 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-400 focus:border-gray-600'} bg-gray-100`}
                                    />
                                    <button type="button" onClick={toggleConfirmPasswordVisibility} className="absolute inset-y-0 right-0 pt-6 p-2 text-gray-600">
                                        {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                                    </button>
                                    {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
                                </div>

                                <div>
                                    <label className="block text-gray-700 text-sm">Role</label>
                                    <select
                                        value={form.role}
                                        onChange={handleChange}
                                        className="w-full p-2 border-b-2 bg-gray-100"
                                    >
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>

                                <button type="submit" className="w-full bg-amber-48 text-white py-2 mt-4">Sign up</button>
                                {message && <p className="text-sm mt-2 text-red-500">{message}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sign_in;

