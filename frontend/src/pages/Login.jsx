import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken,   } = useContext(ShopContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post('http://localhost:4000/api/user/register', {
          name,
          email,
          password,
        });

        if (response.data.success) {
          const userToken = response.data.token;
          setToken(userToken);
          localStorage.setItem('token', userToken);
          setFormStatus('Registration Successful!');
          toast.success('Registration Successful!');
          navigate('/');
        } else {
          toast.error(response.data.message || 'Signup failed');
        }
      } else {
        const response = await axios.post('http://localhost:4000/api/user/login', {
          email,
          password,
        });

        if (response.data.success) {
          const userToken = response.data.token;
          setToken(userToken);
          localStorage.setItem('token', userToken);
          setFormStatus('Login Successful!');
          toast.success('Login Successful!');
          navigate('/');
        } else {
          toast.error(response.data.message || 'Login failed');
        }
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  useEffect(() => {
    if (token) {
      // getProductData();
    }
  }, [token]);

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    if (!token && localToken) {
      setToken(localToken);
    }
  }, []);

  return (
    <div className="transition-all duration-500 ease-in-out min-h-screen flex justify-center items-center bg-gray-50">
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90%] sm:max-w-md bg-white p-8 rounded-lg shadow-lg gap-5 text-gray-800"
      >
        <div className="inline-flex items-center gap-2 mb-2 relative">
          <p className="text-3xl font-semibold">{currentState}</p>
          <span className="absolute bottom-0 left-0 h-[2px] bg-black w-full animate-pulse"></span>
        </div>
        {currentState === 'Sign Up' && (
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative w-full">
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute right-4 top-3 text-gray-500 cursor-pointer hover:text-black text-lg"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <div className="w-full flex flex-col items-center text-sm gap-2">
          <p className="cursor-pointer hover:underline text-gray-600">
             forget your password add another one 
          </p>
          {currentState === 'Login' ? (
            <p
              onClick={() => setCurrentState('Sign Up')}
              className="cursor-pointer hover:text-blue-600"
            >
              Don't have an account? Sign Up
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('Login')}
              className="cursor-pointer hover:text-blue-600"
            >
              Already have an account? Log In
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-black text-white font-medium w-full py-2 rounded-md hover:bg-gray-800 transition-all duration-300"
        >
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>

        {formStatus && (
          <p className="mt-2 text-green-600 font-medium animate-bounce">
            {formStatus}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
