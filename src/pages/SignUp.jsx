import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const homeRoute = process.env.PUBLIC_URL;
  return (
    <div className="flex flex-col justify-center items-center h-[75vh]">
      <form className="bg-[#FFF5DC] p-10 rounded-xl w-2/3 md:w-1/3">
        <h1 className="mb-4 mt-0">
          <span className="text-4xl font-bold font-bebas-neue tracking-widest">
            Sign Up!
          </span>
        </h1>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 font-bold mb-2 text-left font-poppins"
          >
            First Name
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            name="firstName"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="workEmail"
            className="block text-gray-700 font-bold mb-2 text-left font-poppins"
          >
            Email
          </label>
          <input
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Email"
            name="Email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2 text-left font-poppins"
          >
            Password
          </label>
          <input
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-gray-900 font-bebas-neue tracking-widest text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-white hover:text-[#000000] focus:outline-none">
            Sign Up
          </button>
          <Link
            to={`${homeRoute}/signin`}
            className="inline-block align-baseline font-bold font-montserrat text-sm text-[#FBA806] ml-2 md:ml-0"
          >
            Already have an account? Sign In!
          </Link>
        </div>
      </form>
      <div className="mt-20">
        <Link
          to={`${homeRoute}/`}
          className="bg-gray-900 font-bebas-neue tracking-widest text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#000000] focus:outline-none"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
