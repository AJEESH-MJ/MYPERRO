import React, { useState, useEffect, useCallback, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import StarRating from "./StarRating";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = useMemo(() => [
    {
      name: "John Doe",
      testimonial:
        "Excited about the upcoming pet care services! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      testimonial:
        "Can't wait for the pet care company to launch! Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rating: 4,
    },
    {
      name: "Bob Johnson",
      testimonial:
        "Looking forward to the pet care services. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      rating: 5,
    },
    {
      name: "Alice Williams",
      testimonial:
        "Exciting times ahead with the upcoming pet care services. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 3,
    },
    {
      name: "Charlie Brown",
      testimonial:
        "Anticipating the launch of the pet care company! Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      rating: 4,
    },
  ], []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 < items.length ? prevIndex + 1 : 0
    );
  }, [setCurrentIndex, items]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : items.length - 1
    );
  }, [setCurrentIndex, items]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, nextSlide]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-row items-center justify-center">
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={prevSlide}
          className="text-2xl cursor-pointer text-gray-500"
        />
        <div className="w-full p-8">
          <div className="bg-white border-8 border-[#727376] p-6 rounded-lg shadow-md">
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-bebas-neue text-3xl">
                {items[currentIndex].name.charAt(0)}
              </div>
            </div>
            <p className="text-xl text-gray-600 font-montserrat mb-4">
              "{items[currentIndex].testimonial}"
            </p>
            <div className="flex justify-center items-center">
              <StarRating filledStars={items[currentIndex].rating} />
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={nextSlide}
          className="text-2xl cursor-pointer text-gray-500"
        />
      </div>
    </div>
  );
};

export default Slider;
