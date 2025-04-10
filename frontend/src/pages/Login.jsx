import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const [showPassword, setShowPassword] = useState(false); // 👈 toggle password
  const [formStatus, setFormStatus] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setFormStatus(`✅ ${currentState} Successful!`);
    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <div className="transition-all duration-500 ease-in-out">
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-996 m-auto mt-14 gap-4 text-gray-800' >

        <div className='inline-flex items-center gap-2 mb-2 mt-10 relative'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <span className="absolute bottom-0 left-0 h-[2px] bg-black w-full animate-pulse"></span> {/* 🔥 underline animation */}
        </div>

        {currentState === 'Login' ? '' : (
          <input
            type="text"
            className="w-72 px-3 py-2 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
            placeholder="Name"
            required
          />
        )}

        <input
          type="email"
          className="w-72 px-3 py-2 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
          placeholder="Email"
          required
        />

        <div className='relative w-72'>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
            placeholder="Password"
            required
          />
          <span
            className="absolute right-3 top-2.5 text-sm cursor-pointer text-gray-500 hover:text-black"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <div className='w-full flex flex-col items-center text-sm mt-[-8px] gap-2'>
          <p className='cursor-pointer hover:underline'>Forgot your password?</p>
          {
            currentState === 'Login'
              ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer hover:text-blue-600'>Create an account</p>
              : <p onClick={() => setCurrentState('Login')} className='cursor-pointer hover:text-blue-600'>Login Here</p>
          }
        </div>

        <button className='bg-black text-white font-light px-8 py-2 mt-4 hover:bg-gray-900 transition-all duration-300'>
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>

        {/* ✅ status message */}
        {formStatus && (
          <p className="mt-4 text-green-600 font-medium animate-bounce">{formStatus}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
