import React, { useState, useEffect, useRef } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Contact_us = () => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      message: '',
      isAgree: false,
    });
  
    const modalRef = useRef(null);
  
   
    useEffect(() => {
      if (isModalOpen) {
        gsap.fromTo(modalRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 });
      }
    }, [isModalOpen]);
  
    const validate = () => {
      const errors = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.email = 'Invalid email address';
      }
  
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };
  
 
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const wordCount = formData.message.split(' ').length;
      if (wordCount < 50) {
        alert("Please write at least 50 words.");
        return;
      }
      if (!formData.isAgree) {
        alert("You must agree to the terms.");
        return;
      }
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(!isModalOpen);
    };

  return (
    <div>

     <div onClick={() => setIsModalOpen(true)} className="hover:text-orange-225 font-Roboto text-base font-medium">Contact Us</div>

    {isModalOpen && (
        <div ref={modalRef} className="fixed inset-0 bg-gray-500/70 flex md:justify-center md:items-center z-30 h-dvh">
          <div className="bg-white md:p-12 p-5 md:pt-20 opacity-100 shadow-md md:max-w-xl max-w-xs md:w-full ">
            <h2 className="text-3xl font-bold text-amber-48 font-Roboto">Get In Touch</h2>
            <p className='text-xs font-medium mt-2'>Get in touch with our team</p>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className='flex space-x-4'>
                <div>
                  <label className=" text-gray-700 text-sm ">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Eniola"
                    required
                    className={` p-2 w-full border-b-2 border-gray-400 focus:border-gray-600 bg-gray-100`}
                  />
                </div>
                <div>
                  <label className=" text-gray-700 text-sm ">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Ife"
                    required
                    className={` p-2 w-full border-b-2 border-gray-400 focus:border-gray-600 bg-gray-100`}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm ">Email Address</label>
                <input
                  type="email"
                  value={email}
                  placeholder='eniolaxyz56@gmail.com'
                  onChange={(e) => setEmail(e.target.value)}
                  className={` p-2 w-full border-b-2 ${errors.password ? 'border-red-500' : 'border-gray-400 focus:border-gray-600'
                    } bg-gray-100`}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
              </div>
              <div>
                <label className=" text-gray-700 text-sm ">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message (at least 50 words)"
                  rows="5"
                  required
                  className={` p-2 w-full border-b-2 border-gray-400 focus:border-gray-600 bg-gray-100`}
                />
              </div>

              <div>
                <label className="inline text-xs">
                  <input
                    type="checkbox"
                    name="isAgree"
                    checked={formData.isAgree}
                    onChange={(e) => setFormData({ ...formData, isAgree: e.target.checked })}
                    className='mr-3 inline'
                  />
                  You agree to receive our notification via email
                </label>
              </div>
              <div className='flex justify-end'>
                <button type="submit">
                  <Link to="/" className="px-8 py-1.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-amber-48 border-2 hover:text-amber-48" >
                    Send
                  </Link>
                </button>
              </div>
            </form>
            <button
              type="button"
              onClick={closeModal}
              className="absolute md:right-90 right-14  top-5 text-2xl text-red-950"
            >
              {isModalOpen ? <IoCloseSharp /> : close}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact_us