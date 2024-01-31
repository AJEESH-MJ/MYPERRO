import React from "react";
import { DoubleQuote, Shadow } from "../assets";
import { ReviewSlider, StarRating } from "./";

const ReviewsComponent = () => {
  const filledStarsCounts = [5, 3, 4];
  const heading = ["Overall Ratings", "Dog Walking", "Dog Boarding"];

  return (
    <div className="flex flex-col md:flex-row m-10 md:m-24">
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-2/4">
        <h1 className="text-left text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Reviews
        </h1>
        <img
          src={DoubleQuote}
          alt="Double Quote"
          className="w-1/4 md:w-1/3 mb-10 md:mb-6 z-10"
        />
        <div className="flex flex-col bg-[#D9D9D9] w-full lg:w-2/3 h-auto rounded-xl relative bottom-20 -z-10 p-4">
          {filledStarsCounts.map((stars, index) => (
            <div key={index} className="flex-1 aspect-content p-4">
              <h2 className="text-left text-xl md:text-2xl lg:text-3xl font-bold text-[#1E1E1E] font-poppins mb-2">
                {heading[index]}
              </h2>
              <StarRating filledStars={stars} />
            </div>
          ))}
          <div className="relative top-8 flex items-center justify-center">
            <button className="bg-[#FBA806] text-white w-1/2 h-[53px] rounded-xl font-bebas-neue tracking-widest text-lg md:text-xl">
              Rate Us
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center ml-0 md:ml-10 w-full md:w-1/2">
        <ReviewSlider />
        <img src={Shadow} alt="Shadow" className="w-2/3 mt-6 z-10" />
      </div>
    </div>
  );
};

export default ReviewsComponent;
