import React from "react";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="bg-[#FBA806] text-white rounded-md py-6 px-8 md:w-1/2">
          <div className="text-center">
            <h2 className="font-poppins text-3xl font-semibold mb-4">
              Subscribe for Updates
            </h2>
            <p className="font-moon-dance tracking-widest font-semibold text-base mb-4">
              Be the first to know about our launch and special promotions! Join
              our community of pet lovers.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-white text-gray-800 px-4 py-2 rounded-md focus:outline-none w-full"
              />
              <button className="ml-4 bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-[#FF9800] focus:outline-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center ml-4 mt-8 md:mt-0 md:w-1/2">
          <p className="text-base mb-2 font-poppins">
            Follow us on social media for updates and cute pet pictures!
          </p>

          <SocialIcons />
        </div>
      </div>
      <p className="text-center mt-8 text-gray-500">
        &copy; 2024 Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
