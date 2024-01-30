import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from ".";

const Navbar = () => {
  return (
    <nav className="bg-[#D9D9D9] h-[94.31px] w-full">
      <div className="flex items-center justify-between">
        <div className="flex justify-center items-center text-[#000000] text-lg font-bold h-[94.31px] w-[232px] bg-[#EEEEEEEE]">
          <h1 className="font-inter text-[16px] font-normal leading-5 tracking-normal text-left">
            My Perro
          </h1>
        </div>

        <div className="flex justify-end items-center space-x-4 h-[94.31px] w-[681px] bg-[#EEEEEE]">
          <div className="mr-10 flex gap-8">
            <Link
              to="/"
              className="text-[#1E1E1E] font-inter text-[25px] font-normal leading-5 tracking-normal"
            >
              Login
            </Link>
            <Link
              to="/about"
              className="text-[#1E1E1E] font-inter text-[25px] font-normal leading-5 tracking-normal"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-[#1E1E1E] font-inter text-[25px] font-normal leading-5 tracking-normal mr-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#C3C3C3] w-full h-[74px] flex items-center justify-end">
        <div className="flex gap-20 mr-20">
          <Dropdown title="SERVICES" options={['Grooming Services', 'Veterinary Care', 'Pet Boarding', 'Dog Walking', 'Pet Sitting']} />
          <Dropdown title="REVIEWS" options={['Customer Testimonials', 'Ratings and Feedback', 'Success Stories', 'Happy Pet Owners', 'Before and After Photos']} />
          <Dropdown title="SPECIAL OFFERS" options={['Coming Soon Deals', 'Early Bird Discounts', 'Membership Benefits', 'Loyalty Programs']} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
