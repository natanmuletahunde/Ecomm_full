import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, getProductData, backendUrl } = useContext(ShopContext);
  const navigate = useNavigate(); // ✅ Call useNavigate here

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          setFormStatus('Registration Successful!');
          navigate('/'); // ✅ Redirect to homepage after signup
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          setFormStatus('Login Successful!');
          navigate('/'); // ✅ Redirect after login
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    if (token) {
      getProductData();
    }
  }, [token]);

  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, []);

  return (
    <div className="transition-all duration-500 ease-in-out">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-996 m-auto mt-14 gap-4 text-gray-800"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10 relative">
          <p className="prata-regular text-3xl">{currentState}</p>
          <span className="absolute bottom-0 left-0 h-[2px] bg-black w-full animate-pulse"></span>
        </div>

        {currentState === 'Login' ? null : (
          <input
            type="text"
            className="w-72 px-3 py-2 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          className="w-72 px-3 py-2 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative w-72">
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full px-3 py-2 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute right-3 top-2.5 text-sm cursor-pointer text-gray-500 hover:text-black"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <div className="w-full flex flex-col items-center text-sm mt-[-8px] gap-2">
          <p className="cursor-pointer hover:underline">Forgot your password?</p>
          {currentState === 'Login' ? (
            <p
              onClick={() => setCurrentState('Sign Up')}
              className="cursor-pointer hover:text-blue-600"
            >
              Create an account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('Login')}
              className="cursor-pointer hover:text-blue-600"
            >
              Login Here
            </p>
          )}
        </div>

        <button className="bg-black text-white font-light px-8 py-2 mt-4 hover:bg-gray-900 transition-all duration-300">
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>

        {formStatus && (
          <p className="mt-4 text-green-600 font-medium animate-bounce">
            {formStatus}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
