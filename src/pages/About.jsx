import React from "react";
import { Link } from "react-router-dom";
import { SocialIcons } from "../components";

const AboutUsPage = () => {
  const homeRoute = process.env.PUBLIC_URL;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center font-bebas-neue tracking-widest">
        About Us
      </h1>
      <p className="text-lg mb-4 font-poppins">
        Welcome to{" "}
        <span className="font-bebas-neue tracking-widest text-[#FBA806] text-2xl font-semibold">
          MYPERRO
        </span>
        , your future destination for premium pet care services. While our full
        website is under construction, we're thrilled to give you a sneak peek
        into what we have in store for you and your beloved pets.
      </p>
      <p className="text-lg mb-4 font-poppins">
        At
        <span className="font-bebas-neue tracking-widest text-[#FBA806] text-2xl font-semibold">
          MYPERRO
        </span>
        , we understand that your pets are part of your family. Our mission is
        to provide top-notch pet care services that cater to the unique needs of
        every furry friend.
      </p>
      <p className="text-2xl font-bold mb-4 text-center font-montserrat">
        Our Services
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#FFF5DC] p-6 rounded-lg shadow-md">
          <h3 className="font-poppins text-2xl font-semibold mb-4">
            Pet Sitting
          </h3>
          <p className="font-montserrat font-semibold text-gray-600">
            Trust us to take care of your pets with love and attention while
            you're away.
          </p>
        </div>
        <div className="bg-[#FFF5DC] p-6 rounded-lg shadow-md">
          <h3 className="font-poppins text-2xl font-semibold mb-4">
            Pet Photography
          </h3>
          <p className="font-montserrat font-semibold text-gray-600">
            Capture special moments with professional pet photography services.
          </p>
        </div>
        <div className="bg-[#FFF5DC] p-6 rounded-lg shadow-md">
          <h3 className="font-poppins text-2xl font-semibold mb-4">
            Pet Spa Day
          </h3>
          <p className="font-montserrat font-semibold text-gray-600">
            Treat your pets to a relaxing spa day for ultimate pampering and
            rejuvenation.
          </p>
        </div>
        <div className="bg-[#FFF5DC] p-6 rounded-lg shadow-md">
          <h3 className="font-poppins text-2xl font-semibold mb-4">
            Cat Grooming
          </h3>
          <p className="font-montserrat font-semibold text-gray-600">
            Specialized grooming services tailored for your feline friends.
          </p>
        </div>
        <div className="bg-[#FFF5DC] p-6 rounded-lg shadow-md">
          <h3 className="font-poppins text-xl font-semibold mb-4">
            Pet Training Workshops
          </h3>
          <p className="font-montserrat font-semibold text-gray-600">
            Join our workshops to enhance the skills and behavior of your pets.
          </p>
        </div>
      </div>

      <div className="text-lg text-center mb-8 mt-8">
        <p className="mb-4 font-montserrat font-semibold">
          Whether it's a relaxing spa day, professional photography sessions, or
          expert training workshops, we've got your pets covered.
        </p>
        <p className="mb-4 font-montserrat font-semibold">
          Stay tuned for the grand launch! Follow us on social media to receive
          updates and exclusive offers:
        </p>
        <div className="flex justify-center items-center space-x-4">
          <SocialIcons />
        </div>
      </div>
      <p className="text-lg mb-8 text-center font-montserrat font-semibold">
        Thank you for your patience and excitement. We can't wait to embark on
        this pet care journey with you and your furry companions!
      </p>
      <div className="mt-8">
        <Link
          to={`${homeRoute}/`}
          className="bg-gray-900 font-bebas-neue tracking-widest text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#000000] focus:outline-none"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AboutUsPage;
