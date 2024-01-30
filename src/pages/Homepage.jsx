import React from "react";
import { Background, DogImage, PetShop } from "../assets/index";
import { Slider, SocialIcons } from "../components";

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

      <div className="w-full h-[588px] flex justify-center items-center -mb-8">
        <Slider />
      </div>

      <div class="flex items-center justify-center mb-20">
        <div class="bg-[#EEEEEEEE] w-full sm:w-full md:w-[80%] lg:w-[90%] rounded-xl flex">
          <div class="w-full md:w-1/2 p-6 ml-10 mt-14">
            <h3 class="text-left text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#333333] font-poppins">
              Dog Training
            </h3>
            <p class="text-left text-xl text-gray-600 font-montserrat">
              Teach your dog new tricks and commands with our professional
              training programs. Our experienced trainers ensure a positive and
              rewarding learning experience for your furry friend.
            </p>
          </div>

          <div class="hidden sm:flex w-full sm:w-1/2">
            <img
              src={DogImage}
              alt="dog"
              class="w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center mb-20">
        <div class="bg-[#EEEEEEEE] w-full sm:w-full md:w-[80%] lg:w-[90%] h-full rounded-xl flex">
          <div class="w-full text-left md:w-1/2 p-6 ml-10">
            <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#333333] font-poppins">
              About Us
            </h3>
            <div className="text-xl text-gray-600 font-montserrat mb-4">
            <p>
          Welcome to our pet care-centric world! We are a dedicated team passionate about providing top-notch services for your beloved pets.
        </p>
        <p>
          Our mission is to create a harmonious and joyful environment for pets, ensuring their well-being and happiness.
        </p>
        <p>
          Stay tuned as we prepare to unveil a range of services that will redefine pet care experiences.
        </p>
        </div>
        <button className="w-full sm:w-[132.57px] h-[55px] bg-[#1E1E1E] text-white font-bebas-neue tracking-widest px-2 mt-4 sm:mt-0 sm:px-4 py-1 sm:py-2 flex justify-center items-center rounded-full hover:bg-[#FF9800] focus:outline-none">
                    Know More
                  </button>
          </div>

          <div class="hidden sm:flex w-full sm:w-1/2 h-[400px]">
            <img
              src={PetShop}
              alt="dog"
              class="w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Homepage;
