import React from "react";
import { Link } from "react-router-dom";
import { SocialIcons } from "../components";

const ContactUsPage = () => {
  const homeRoute = process.env.PUBLIC_URL;

  return (
    <div className="container mx-auto p-8">
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 pt-10 mr-10 mb-10 lg:mb-0">
          <h1 className="text-4xl font-bold mb-6 font-bebas-neue tracking-widest">
            Exciting News Coming Soon!
          </h1>
          <p className="text-lg mb-8 font-poppins">
            We're busy crafting a paw-some experience for you and your beloved
            pets. Our pet care experts are working on a range of services to
            ensure your furry friends receive the love and care they deserve.
          </p>
          <p className="text-lg mb-8 font-poppins">
            Stay tuned for the grand unveiling! While we prepare for the launch,
            feel free to connect with us on social media for sneak peeks,
            updates, and exclusive offers:
          </p>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <SocialIcons />
          </div>
          <p className="text-lg mb-8 font-poppins">
            Have questions or eager to get in touch? Reach out to us via email:
          </p>
          <p className="text-xl font-bold mb-4 font-montserrat">
            Email: info@myperro.com
          </p>
        </div>

        <div className="flex justify-center items-center w-full">
          <form className="bg-[#FFF5DC] p-10 rounded-xl w-full">
            <h1 className="mb-4 mt-0">
              <span className="text-4xl font-bold font-bebas-neue tracking-widest">
                Contact Us
              </span>
            </h1>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-bold mb-2 text-left font-poppins"
              >
                First Name
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="workEmail"
                className="block text-gray-700 font-bold mb-2 text-left font-poppins"
              >
                Email
              </label>
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Email"
                name="Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2 text-left font-poppins"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-gray-900 font-bebas-neue tracking-widest text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#000000] focus:outline-none">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="col-span-2 text-center">
        <p className="text-lg mt-8 font-montserrat font-semibold">
          Thank you for your patience and enthusiasm. We can't wait to share the
          joy of our upcoming pet care services with you and your furry
          companions!
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
    </div>
  );
};

export default ContactUsPage;
