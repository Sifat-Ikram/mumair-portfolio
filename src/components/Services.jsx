import ux from "../assets/others/ux.png";
import web from "../assets/others/web.png";
import app from "../assets/others/app.png";
import graphic from "../assets/others/graphic.png";

const Services = () => {
  return (
    <div className="flex justify-center flex-col items-center mt-32">
      <h1 className="text-6xl font-semibold font-poppins text-black dark:text-white">
        Services
      </h1>
      <p className="font-poppins text-sm dark:text-white sm:text-lg md:text-xl font-normal text-center mt-10 mb-20">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus <br className="max-lg:hidden" /> in. Aliquet donec morbi convallis pretium
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="py-14 px-6 rounded-xl bg-base-200 space-y-5 cursor-pointer h-[346px] transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <img src={ux} alt="UX/UI" height={82} width={72} />
          <h1 className="text-2xl font-semibold">UI/UX</h1>
          <p className="text-xl text-black">
            Lorem ipsum dolor sit amet <br /> consectetur. Morbi diam nisi{" "}
            <br /> nam diam interdum
          </p>
        </div>
        <div className="py-14 px-6 rounded-xl bg-base-200 space-y-5 cursor-pointer h-[346px] transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <img src={web} alt="Web Design" height={82} width={72} />
          <h1 className="text-2xl font-semibold">Web Design</h1>
          <p className="text-xl text-black">
            Lorem ipsum dolor sit amet <br /> consectetur. Morbi diam nisi{" "}
            <br /> nam diam interdum
          </p>
        </div>
        <div className="py-14 px-6 rounded-xl bg-base-200 space-y-5 cursor-pointer h-[346px] transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <img src={app} alt="App Design" height={82} width={47} />
          <h1 className="text-2xl font-semibold">App Design</h1>
          <p className="text-xl text-black">
            Lorem ipsum dolor sit amet <br /> consectetur. Morbi diam nisi{" "}
            <br /> nam diam interdum
          </p>
        </div>
        <div className="py-14 px-6 rounded-xl bg-base-200 space-y-5 cursor-pointer h-[346px] transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <img src={graphic} alt="Graphic Design" height={82} width={72} />
          <h1 className="text-2xl font-semibold">Graphic Design</h1>
          <p className="text-xl text-black">
            Lorem ipsum dolor sit amet <br /> consectetur. Morbi diam nisi{" "}
            <br /> nam diam interdum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
