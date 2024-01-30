import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center space-x-4 mt-4">
      <Link
        to="#your-link-to-facebook"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-all duration-300"
      >
        <FontAwesomeIcon icon={faFacebookF} size="xl" />
      </Link>
      <Link
        to="#your-link-to-twitter"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600 transition-all duration-300"
      >
        <FontAwesomeIcon icon={faTwitter} size="xl" />
      </Link>
      <Link
        to="#your-link-to-instagram"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700 transition-all duration-300"
      >
        <FontAwesomeIcon icon={faInstagram} size="xl" />
      </Link>
    </div>
  );
};

export default SocialIcons;
