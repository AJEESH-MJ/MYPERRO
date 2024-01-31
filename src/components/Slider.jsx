import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  PetSitting,
  PetPhotography,
  PetSpa,
  PetTraining,
  CatGrooming,
} from "../assets/index";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 < items.length ? prevIndex + 2 : 0
    );
  }, [setCurrentIndex, items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 >= 0 ? prevIndex - 2 : items.length - 2
    );
  }, [setCurrentIndex, items.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, nextSlide]);

  const sliceSize = window.innerWidth < 768 ? currentIndex + 1 : currentIndex + 2;

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full md:w-[80%] lg:w-[90%]">
        <div className="flex justify-between items-center m-4 md:m-0">
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={prevSlide}
            className="text-2xl sm:text-3xl cursor-pointer"
          />
          {items.slice(currentIndex, sliceSize).map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 flex justify-center items-center"
            >
              <div className="p-2 sm:p-4 mb-4 flex flex-col-reverse md:flex-row h-[300px] bg-[#FFE6A6] rounded-xl w-full md:w-3/4 m-2 md:m-0">
                <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bebas-neue tracking-wider font-semibold mb-2">
                    {item.heading}
                  </h3>
                  <button className="w-2/3 h-auto bg-black text-white rounded-xl p-4 font-bebas-neue tracking-widest">
                    {item.buttonText}
                  </button>
                </div>

                <div className="overflow-hidden w-full md:w-1/2">
                  <img
                    src={item.image}
                    alt="Box"
                    className="w-full h-full rounded-xl object-cover"
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
