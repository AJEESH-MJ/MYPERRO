import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const DropdownComponent = ({ title, options }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    // Attach click event listener to document body to close dropdown on outside click
    document.body.addEventListener("click", closeDropdown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  }, []); // Run this effect only once on component mount

  return (
    <div className="relative" ref={dropdownRef}>
      <Link
        className="flex items-center text-gray-800 font-poppins font-semibold text-lg leading-6 cursor-pointer"
        onClick={toggleDropdown}
      >
        {title}
        <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
      </Link>
      {showDropdown && (
        <div className="absolute bg-[#C3C3C3] p-2 mt-1 shadow-md rounded-sm w-[180px]">
          {options.map((option, index) => (
            <Link
              key={index}
              to={`/${title.toLowerCase().replace(/\s+/g, "-")}/${option
                .toLowerCase()
                .replace(/[^a-zA-Z0-9]/g, "")}`}
              className="block font-poppins text-gray-800 py-1 hover:border hover:border-white hover:rounded-xl hover:text-white"
            >
              {option}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
