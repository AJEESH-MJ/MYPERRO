import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import {
  PetSitting,
  PetPhotography,
  PetSpa,
  PetTraining,
  CatGrooming,
} from "../assets/index";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 < items.length ? prevIndex + 2 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 >= 0 ? prevIndex - 2 : items.length - 2
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  const items = [
    {
      heading: "Pet Sitting",
      buttonText: "Book a Sitter",
      image: PetSitting,
    },
    {
      heading: "Pet Photography",
      buttonText: "Capture Moments",
      image: PetPhotography,
    },
    {
      heading: "Pet Spa Day",
      buttonText: "Treat Your Pet",
      image: PetSpa,
    },
    {
      heading: "Cat Grooming",
      buttonText: "Pamper Your Cat",
      image: CatGrooming,
    },
    {
      heading: "Pet Training Workshops",
      buttonText: "Join a Workshop",
      image: PetTraining,
    },
  ];

  return (
    <div className="relative w-full flex justify-center">
      <div className="w-full sm:w-full md:w-[80%] lg:w-[90%] m-4">
        <div className="flex overflow-hidden justify-center items-center">
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={prevSlide}
            className="text-2xl sm:text-3xl cursor-pointer mr-4 sm:mr-8"
          />
          {items.slice(currentIndex, currentIndex + 2).map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 px-2 sm:px-4">
              <div className="border p-2 sm:p-4 mb-2 sm:mb-4 flex flex-col sm:flex-row sm:h-auto sm:w-[90%] bg-[#FFE6A6] rounded-xl">
                <div className="flex flex-col justify-center items-center w-full sm:w-1/2">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bebas-neue tracking-wider font-semibold mb-2">
                    {item.heading}
                  </h3>
                  <button className="w-full sm:w-[132.57px] h-[55px] bg-[#1E1E1E] text-white font-bebas-neue tracking-widest px-2 mt-4 sm:mt-0 sm:px-4 py-1 sm:py-2 flex justify-center items-center rounded-full hover:bg-[#FF9800] focus:outline-none">
                    {item.buttonText}
                  </button>
                </div>

                <div className="flex-shrink-0 w-full sm:w-1/2 pr-2 sm:pr-4">
                  <img
                    src={item.image}
                    alt="Box"
                    className="w-full sm:w-full md:w-[279.92px] h-[200px] sm:h-auto md:h-[359.21px] rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={nextSlide}
            className="text-2xl sm:text-3xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
