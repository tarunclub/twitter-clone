import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [inputs, setInputs] = useState({
    name: '',
    username: '',
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate('/');
    } catch (error) {
      setErr(error.response.data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={logo} alt="Twitter logo" className="w-12 h-12 mb-4" />
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Log in to Twitter</h2>
        <form onSubmit={handleSignIn} className="flex flex-col">
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-2 mb-4 border rounded-lg"
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 mb-4 border rounded-lg"
            name="password"
            onChange={handleChange}
          />
          {err && err}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Log in
          </button>
        </form>
        <div className="mt-4 text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
