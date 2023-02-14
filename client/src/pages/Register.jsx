import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Register = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/api/auth/register', inputs);
    } catch (error) {
      console.log(error.message);
      setError(error.response.data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={logo} alt="Twitter logo" className="w-12 h-12 mb-4" />
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Create a Twitter account</h2>
        <form className="flex flex-col">
          <input
            type="text"
            placeholder="Display Name"
            className="px-4 py-2 mb-4 border rounded-lg"
            required
            name="name"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 mb-4 border rounded-lg"
            name="email"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-2 mb-4 border rounded-lg"
            name="username"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 mb-4 border rounded-lg"
            name="password"
            required
            onChange={handleChange}
          />
          {error && error}
          <button
            onClick={handleRegister}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Sign up
          </button>
        </form>
        <div className="mt-4 text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
