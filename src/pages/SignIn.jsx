import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-[75vh]">
      <form className="bg-[#FFF5DC] p-10 rounded-xl w-2/3 md:w-1/3">
        <h1 className="mb-4 mt-0">
          <span className="text-4xl font-bold font-bebas-neue tracking-widest">
            Sign In!
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
            Sign In
          </button>
          <Link
            to="/signup"
            className="inline-block align-baseline font-bold font-montserrat text-sm text-[#FBA806] ml-2 md:ml-0"
          >
            Don't have an account? Sign Up!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
