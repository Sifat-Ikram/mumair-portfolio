import banner from "../assets/others/banner.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 dark:bg-dark">
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 lg:mt-24 gap-16 md:gap-24 lg:gap-32">
        {/* Text Section */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-poppins text-xl sm:text-2xl dark:text-white md:text-3xl font-semibold">
            Hi, I am <br />
            <span className="text-[#FD6F00]">Muhammad Umair</span>
          </h1>
          <div className="">
            <h1 className="font-poppins dark:text-white text-[32px] -mt-7 sm:text-[40px] md:text-[50px] lg:text-[80px] font-bold leading-tight">
              UI & UX
            </h1>
            <h1 className="md:ml-16 lg:ml-36 dark:text-white text-[32px] -mt-4 sm:text-[40px] md:text-[50px] lg:text-[80px] font-bold leading-tight">
              Designer
            </h1>
          </div>
          <h1 className="font-poppins text-xs sm:text-sm md:text-lg dark:text-white lg:text-xl">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed{" "}
            <br className="hidden lg:inline" />
            massa nibh lectus netus in. Aliquet donec morbi convallis{" "}
            <br className="hidden lg:inline" />
            pretium. Turpis tempus pharetra
          </h1>
          <button className="buttons font-poppins px-6 dark:bg-[#FD6F00] sm:px-8 md:px-10 py-2 text-sm md:text-base">
            Hire Me
          </button>
        </div>

        {/* Image Section */}
        <div className="relative flex-1 mt-12 md:mt-0">
          <div className="relative h-[260px] w-[260px] sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] lg:h-[420px] lg:w-[420px] rounded-full p-1 bg-gradient-to-b from-[#1e40ef] to-[#FD6F00]">
            <div className="h-full w-full rounded-full bg-white relative overflow-visible">
              <div className="absolute top-[-98px] left-1/2 transform -translate-x-1/2 h-[350px] w-[252px] sm:top-[-105px] sm:h-[400px] sm:w-[295px] md:top-[-97px] md:h-[450px] md:w-[350px] lg:top-[-110px] lg:h-[525px] lg:w-[410px]">
                <img
                  src={banner}
                  alt="banner-image"
                  className="h-full w-full object-cover rounded-b-full"
                />
              </div>
            </div>
          </div>
          <div className="w-[160px] h-[35px] sm:w-[200px] sm:h-[45px] md:w-[240px] md:h-[55px] lg:w-[320px] lg:h-[70px] bg-[#FD6F0099] absolute top-[-45px] md:-top-10 lg:-top-12 left-10 md:left-14 lg:left-7"></div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center md:justify-end w-full md:w-4/5 mx-auto max-md:mt-5 lg:right-10 mt-8">
        <div className="flex justify-center items-center gap-4">
          <FaFacebook className="text-xl dark:text-white sm:text-2xl md:text-3xl" />
          <FaTwitter className="text-xl dark:text-white sm:text-2xl md:text-3xl" />
          <FaInstagram className="text-xl dark:text-white sm:text-2xl md:text-3xl" />
          <FaLinkedin className="text-xl dark:text-white sm:text-2xl md:text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
