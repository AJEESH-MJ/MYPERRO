import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="bg-[#D9D9D9] h-[168.31] w-full">
      <div className="flex items-center justify-between">
        <div className="flex justify-center items-center h-[94.31px] w-[232px] bg-[#EEEEEEEE]">
          <h1 className="font-bebas-neue text-3xl leading-5 tracking-normal text-[#FBA806]">
            MYPERRO
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={toggleMobileMenu} className="flex mr-10">
            <FontAwesomeIcon icon={faBars} size="2xl" />
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex sm:justify-end sm:items-center sm:space-x-4 h-[94.31px] w-[681px] bg-[#EEEEEE]">
          <div className="mr-10 flex gap-8">
            <Link
              to="/"
              className="text-[#1E1E1E] font-poppins text-[25px] font-normal leading-5 tracking-normal hover:text-[#FBA806]"
            >
              Login
            </Link>
            <Link
              to="/"
              className="text-[#1E1E1E] font-poppins text-[25px] font-normal leading-5 tracking-normal hover:text-[#FBA806]"
            >
              About Us
            </Link>
            <Link
              to="/"
              className="text-[#1E1E1E] font-poppins text-[25px] font-normal leading-5 tracking-normal hover:text-[#FBA806]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="lg:hidden">
          <div className="flex justify-center items-center gap-8 bg-[#C3C3C3] pt-6">
            <Link
              to="/"
              className="text-[#1E1E1E] font-poppins text-[25px] font-normal leading-5 tracking-normal hover:text-[#FBA806]"
            >
              Login
            </Link>
            <Link
              to="/"
              className="text-[#1E1E1E] font-poppins text-[25px] font-normal leading-5 tracking-normal hover:text-[#FBA806]"
            >
              About Us
            </Link>
            <Link
              to="/"
              className="text-[#1E1E1E] font-poppins text-[25px] font-normal leading-5 tracking-normal hover:text-[#FBA806]"
            >
              Contact Us
            </Link>
          </div>
          <div className="bg-[#C3C3C3] flex gap-10 items-center justify-center p-4">
            <Dropdown
              title="SERVICES"
              options={[
                "Grooming Services",
                "Veterinary Care",
                "Pet Boarding",
                "Dog Walking",
                "Pet Sitting",
              ]}
            />
            <Dropdown
              title="REVIEWS"
              options={[
                "Customer Testimonials",
                "Ratings and Feedback",
                "Success Stories",
                "Happy Pet Owners",
                "Before and After Photos",
              ]}
            />
            <Dropdown
              title="SPECIAL OFFERS"
              options={[
                "Coming Soon Deals",
                "Early Bird Discounts",
                "Membership Benefits",
                "Loyalty Programs",
              ]}
            />
          </div>
        </div>
      )}

      {/* Desktop Dropdowns */}
      <div className="hidden bg-[#C3C3C3] w-full h-[74px] sm:flex sm:items-center sm:justify-end">
        <div className="flex gap-20 mr-20">
          <Dropdown
            title="SERVICES"
            options={[
              "Grooming Services",
              "Veterinary Care",
              "Pet Boarding",
              "Dog Walking",
              "Pet Sitting",
            ]}
          />
          <Dropdown
            title="REVIEWS"
            options={[
              "Customer Testimonials",
              "Ratings and Feedback",
              "Success Stories",
              "Happy Pet Owners",
              "Before and After Photos",
            ]}
          />
          <Dropdown
            title="SPECIAL OFFERS"
            options={[
              "Coming Soon Deals",
              "Early Bird Discounts",
              "Membership Benefits",
              "Loyalty Programs",
            ]}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
