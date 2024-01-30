import React from "react";
import { Background } from "../assets/index";
import { SocialIcons } from "../components";

const Homepage = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full min-h-[588px] bg-[#FFF5DC]">
        <div className="flex flex-col-reverse mt-10 lg:flex-row lg:mt-0 w-11/12 items-center">
          <div className="container mx-auto  w-10/12 p-8">
            <div className="text-center">
              <h1 className="font-bebas-neue text-5xl font-extrabold text-[#FBA806] mb-4 tracking-wider">
                Welcome to MYPERRO
              </h1>
              <p className="font-moon-dance text-2xl font-semibold text-gray-800 mb-8 tracking-wider">
                Your Pet's Comfort, Our Priority
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="font-poppins text-2xl font-bold text-[#333] mb-4">
                  Premium Pet Grooming
                </h2>
                <p className="font-moon-dance font-semibold tracking-widest text-gray-600 text-xl">
                  Indulge your pets with our top-notch grooming services. We
                  make sure they look and feel their best.
                </p>
              </div>

              <div className="font-poppins bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold text-[#333] mb-4">
                  Expert Veterinary Care
                </h2>
                <p className="font-moon-dance font-semibold text-xl tracking-widest text-gray-600">
                  Our experienced veterinarians provide compassionate care to
                  keep your pets healthy and happy.
                </p>
              </div>

              <div className="font-poppins bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold text-[#333] mb-4">
                  Luxurious Pet Boarding
                </h2>
                <p className="font-moon-dance font-semibold text-xl tracking-widest text-gray-600">
                  Treat your pets to a comfortable stay in our premium boarding
                  facilities with personalized attention.
                </p>
              </div>
            </div>

            <p className="text-lg font-poppins text-gray-700 mt-8">
              Join us on this exciting journey to redefine pet care. Follow us
              on social media for updates, promotions, and adorable pet stories!
            </p>

            <SocialIcons />
          </div>
          <div className="w-full lg:w-6/12">
            <img
              src={Background}
              alt="Pet Care"
              className="w-full h-[330px] object-fit rounded-full overflow-hidden"
            />
          </div>
        </div>
      </div>

      {/* <div className='bg-[#FBA806] text-white py-12'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold mb-4'>Subscribe for Updates</h2>
          <p className='text-lg mb-6'>Be the first to know about our launch and special promotions!</p>
          <input
            type='email'
            placeholder='Your Email Address'
            className='bg-white text-gray-800 px-4 py-2 rounded-md focus:outline-none'
          />
          <button className='ml-4 bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 focus:outline-none'>
            Subscribe
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Homepage;
