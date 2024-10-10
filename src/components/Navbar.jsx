import logo from "../assets/others/logo.png";
import DarkModeButton from "./DarkModeButton";

const Navbar = () => {
  const navList = (
    <>
      <li className="font-poppins font-normal text-sm sm:text-lg md:text-xl cursor-pointer hover:text-[#FD6F00] dark:hover:text-[#FD6F00] dark:text-white">
        Home
      </li>
      <li className="font-poppins font-normal text-sm sm:text-lg md:text-xl cursor-pointer hover:text-[#FD6F00] dark:hover:text-[#FD6F00] dark:text-white">
        About Me
      </li>
      <li className="font-poppins font-normal text-sm sm:text-lg md:text-xl cursor-pointer hover:text-[#FD6F00] dark:hover:text-[#FD6F00] dark:text-white">
        Services
      </li>
      <li className="font-poppins font-normal text-sm sm:text-lg md:text-xl cursor-pointer hover:text-[#FD6F00] dark:hover:text-[#FD6F00] dark:text-white">
        Projects
      </li>
      <li className="font-poppins font-normal text-sm sm:text-lg md:text-xl cursor-pointer hover:text-[#FD6F00] dark:hover:text-[#FD6F00] dark:text-white">
        Testimonials
      </li>
      <li className="font-poppins font-normal text-sm sm:text-lg md:text-xl cursor-pointer hover:text-[#FD6F00] dark:hover:text-[#FD6F00] dark:text-white">
        Contact
      </li>
    </>
  );

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark">
      <div className="navbar bg-base-100 dark:bg-dark py-3 flex justify-between items-center">
        <div className="navbar-start flex justify-start items-center max-sm:gap-5">
          {/* Dropdown for Mobile */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-medium rounded-box w-48 z-[1] gap-2"
            >
              {navList}
            </ul>
          </div>
          {/* Logo */}
          <div className="flex justify-center items-center gap-2 md:gap-4">
            <img
              src={logo}
              alt="logo"
              className="h-[50px] w-[54px] md:h-[66px] md:w-[70px]"
            />
            <h1 className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">
              <span className="font-bold">M</span>umair
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 md:gap-6 lg:gap-8 items-center">
            {navList}
            <button className="font-poppins buttons px-4 py-2 md:px-5 md:py-3 text-sm md:text-base dark:text-white dark:bg-[#FD6F00]">
              Download CV
            </button>
          </ul>
        </div>
        <div className="flex justify-end md:pl-10">
          <DarkModeButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
