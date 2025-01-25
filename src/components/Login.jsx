import React from 'react';
import backImg from "../assets/back.jpg";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center relative bg-gradient-to-b from-purple-800 to-purple-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${backImg})` }}
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-white bg-opacity-10 rounded-xl shadow-xl p-4 max-w-xs w-full backdrop-blur-lg border border-white border-opacity-20">
        <h2 className="text-center text-2xl font-bold text-white mb-4">Login</h2>
        <form>
          <div className="mb-4 relative">
            <input
              className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              type="text"
              id="username"
              placeholder="Username"
            />
            <i className="absolute right-3 top-2 text-white font-normal not-italic">👤</i>
          </div>
          <div className="mb-4 relative">
            <input
              className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              type="password"
              id="password"
              placeholder="Password"
            />
            <i className="absolute right-3 top-2 text-white font-normal not-italic">🔒</i>
          </div>
          <div className="flex justify-between items-center text-white text-sm mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="hover:underline">Forgot password?</a>
          </div>
          <Link to='/mainpage'>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg font-semibold transition"
          >
            Login
          </button></Link>
        </form>
        <p className="text-center text-white text-sm mt-4">
          Don't have an account? <a href="#" className="underline hover:text-purple-300">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
