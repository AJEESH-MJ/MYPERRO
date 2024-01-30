import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DropdownComponent = ({ title, options }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative">
      <Link
        to={`/${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="flex items-center text-gray-800 font-semibold text-lg leading-6 cursor-pointer"
        onClick={toggleDropdown}
      >
        {title}
        <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
      </Link>
      {showDropdown && (
        <div className="absolute bg-[#EEEEEEEE] p-2 mt-1 shadow-md rounded-sm w-[150px]">
          {options.map((option, index) => (
            <Link
              key={index}
              to={`/${title.toLowerCase().replace(/\s+/g, '-')}-${index + 1}`}
              className="block text-gray-800 py-1 border-b-4 border-white"
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
