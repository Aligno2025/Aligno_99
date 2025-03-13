import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form submitted');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-teal-500 mb-4">Sign Up to Aligno</h2>
        <p className="text-center text-gray-600 mb-6">Please sign up to continue</p>
        <div className="mb-4">
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          <p className="text-gray-600 text-sm">It must be a combination of minimum 8 letters, numbers, and symbols.</p>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-700">Remember me</label>
          <a href="#" className="ml-auto text-teal-500">Forgot Password?</a>
        </div>
        <button type="submit" className="w-full bg-teal-500 text-white py-2 rounded">Sign Up</button>
        <div className="text-center my-4 text-gray-600">Or Sign Up with:</div>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-black text-white p-2 rounded hover:bg-gray-800 flex items-center space-x-2">
            <i className="fab fa-google"></i>
            <span>Google</span>
          </button>
          <button className="bg-black text-white p-2 rounded hover:bg-gray-800 flex items-center space-x-2">
            <i className="fab fa-apple"></i>
            <span>Apple</span>
          </button>
          <button className="bg-black text-white p-2 rounded hover:bg-gray-800 flex items-center space-x-2">
            <i className="fab fa-twitter"></i>
            <span>Twitter</span>
          </button>
        </div>
        <div className="text-center">
          <a href="#" className="text-teal-500">No account yet? Sign In</a>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
