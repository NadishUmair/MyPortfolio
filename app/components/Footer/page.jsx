import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black flex flex-col justify-center items-center text-white py-10">
      <div className="w-[90%] flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
          <h1 className="mb-4 font-bold text-4xl text-[#61D2B4]">Get In Touch</h1>
          <ul className="flex space-x-4 mt-4 justify-center md:justify-start">
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#61D2B4] transition duration-200">
                <FaGithub size={30} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#61D2B4] transition duration-200">
                <FaLinkedin size={30} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#61D2B4] transition duration-200">
                <FaInstagram size={30} />
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#61D2B4] transition duration-200">
                <FaFacebook size={30} />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <form className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
            <div className="mb-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#61D2B4] bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone"
                className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#61D2B4] bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#61D2B4] bg-gray-700 text-white"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#61D2B4] w-full text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
