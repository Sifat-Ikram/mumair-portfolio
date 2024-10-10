import about from "../assets/others/about.png";

const AboutMe = () => {
  return (
    <div className="w-full mx-auto flex flex-col-reverse md:flex-row justify-center items-center mt-8 md:mt-10 lg:mt-24 px-4 sm:px-8">
      <div className="relative flex-1 mt-20 flex justify-center">
        <div className="relative h-[275px] w-[275px] sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] lg:h-[420px] lg:w-[420px] rounded-full p-[6px] bg-gradient-to-b from-[#1e40ef] to-[#FD6F00]">
          <div className="h-full w-full rounded-full bg-white relative overflow-visible">
            <div className="absolute top-[-86px] sm:top-[-110px] left-1/2 transform -translate-x-1/2 h-[350px] w-[265px] sm:h-[400px] sm:w-[290px] md:top-[-100px] md:h-[450px] md:w-[350px] lg:top-[-115px] lg:h-[525px] lg:w-[410px]">
              <img
                src={about}
                alt="about-image"
                className="h-full w-full object-cover rounded-b-full"
              />
            </div>
          </div>
        </div>
        <div className="w-[160px] h-[40px] sm:w-[180px] md:w-[240px] md:h-[60px] lg:w-[344px] lg:h-[70px] bg-[#FD6F0099] absolute -top-[30px] sm:-top-[40px] md:-top-[40px] lg:-top-12 left-14 lg:left-28"></div>
      </div>
      <div className="flex-1 space-y-6 text-center md:text-left mt-6 md:mt-0 max-md:pb-10">
        <h1 className="font-poppins dark:text-white text-4xl sm:text-5xl md:text-6xl font-semibold">
          About Me
        </h1>
        <p className="font-poppins dark:text-white text-lg sm:text-xl text-left">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <div className="space-y-5">
          <div className="space-y-1">
            <h1 className="font-poppins text-2xl dark:text-white font-semibold text-left">
              UX
            </h1>
            <div className="relative w-full">
              <progress
                className="progress w-full h-4 rounded-lg custom-progress"
                value="90"
                max="100"
              ></progress>
              <div
                className="absolute top-1/2 transform -translate-y-1/2 w-8 h-8 ml-[13px] mt-[-3px] border-[#FD6F00] border-2 border-solid rounded-full"
                style={{ left: "calc(90% - 16px)" }}
              ></div>
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="font-poppins text-2xl dark:text-white font-semibold text-left">
              Website Design
            </h1>
            <div className="relative w-full">
              <progress
                className="progress w-full h-4 rounded-lg custom-progress"
                value="85"
                max="100"
              ></progress>
              <div
                className="absolute top-1/2 transform -translate-y-1/2 w-8 h-8 ml-[13px] mt-[-3px] border-[#FD6F00] border-2 border-solid rounded-full"
                style={{ left: "calc(85% - 16px)" }}
              ></div>
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="font-poppins text-2xl dark:text-white font-semibold text-left">
              App Design
            </h1>
            <div className="relative w-full">
              <progress
                className="progress w-full h-4 rounded-lg custom-progress"
                value="95"
                max="100"
              ></progress>
              <div
                className="absolute top-1/2 transform -translate-y-1/2 w-8 h-8 ml-[13px] mt-[-3px] border-[#FD6F00] border-2 border-solid rounded-full"
                style={{ left: "calc(95% - 16px)" }}
              ></div>
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="font-poppins text-2xl dark:text-white font-semibold text-left">
              Graphic Design
            </h1>
            <div className="relative w-full">
              <progress
                className="progress w-full h-4 rounded-lg custom-progress"
                value="90"
                max="100"
              ></progress>
              <div
                className="absolute top-1/2 transform -translate-y-1/2 w-8 h-8 ml-[13px] mt-[-3px] border-[#FD6F00] border-2 border-solid rounded-full"
                style={{ left: "calc(90% - 16px)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
