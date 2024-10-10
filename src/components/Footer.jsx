import logo from "../assets/others/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const navList = (
    <>
      <li className="font-poppins font-normal dark:text-white text-sm md:text-lg cursor-pointer hover:text-[#FD6F00]">
        Home
      </li>
      <li className="font-poppins font-normal dark:text-white text-sm md:text-lg cursor-pointer hover:text-[#FD6F00]">
        About Me
      </li>
      <li className="font-poppins font-normal dark:text-white text-sm md:text-lg cursor-pointer hover:text-[#FD6F00]">
        Services
      </li>
      <li className="font-poppins font-normal dark:text-white text-sm md:text-lg cursor-pointer hover:text-[#FD6F00]">
        Projects
      </li>
      <li className="font-poppins font-normal dark:text-white text-sm md:text-lg cursor-pointer hover:text-[#FD6F00]">
        Testimonials
      </li>
      <li className="font-poppins font-normal dark:text-white text-sm md:text-lg cursor-pointer hover:text-[#FD6F00]">
        Contact
      </li>
    </>
  );

  return (
    <div className="flex flex-col justify-center items-center mt-10 pt-20 bg-base-200 dark:bg-dark w-full">
      <div className="flex flex-col justify-center items-center w-full">
        {/* Logo and Title */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5">
          <img
            src={logo}
            alt="logo"
            className="h-[50px] w-[60px] md:h-[66px] md:w-[70px]"
          />
          <h1 className="font-montserrat text-3xl dark:text-white md:text-5xl text-center">
            <span className="font-bold">M</span>umair
          </h1>
        </div>

        {/* Navigation List */}
        <div className="my-5 md:my-10">
          <ul className="flex max-sm:flex-col dark:text-white flex-wrap justify-center items-center gap-4 md:gap-5">
            {navList}
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-4 md:gap-5 my-5 md:my-8">
          <FaFacebook className="text-xl dark:text-white md:text-2xl hover:text-[#FD6F00]" />
          <FaTwitter className="text-xl dark:text-white md:text-2xl hover:text-[#FD6F00]" />
          <FaInstagram className="text-xl dark:text-white md:text-2xl hover:text-[#FD6F00]" />
          <FaLinkedin className="text-xl dark:text-white md:text-2xl hover:text-[#FD6F00]" />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#121212] p-4 md:p-5 w-full text-center">
        <h1 className="text-[12px] md:text-lg text-white">
          © 2023 <span className="text-[#FD6F00] font-bold">Mumair</span> All
          Rights Reserved, Inc.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
