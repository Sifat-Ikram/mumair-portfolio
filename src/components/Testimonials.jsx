import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import testimonial from "../assets/others/testimonial.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef, useState } from "react";

const Testimonials = () => {
  const [totalSlides] = useState(4); // Total number of slides
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="space-y-8 mt-16 md:mt-32">
      <div className="space-y-5 text-center px-4">
        <h1 className="font-poppins dark:text-white text-4xl md:text-5xl lg:text-6xl font-semibold">
          Testimonials
        </h1>
        <p className="font-poppins dark:text-white text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus <br className="max-lg:hidden" /> in. Aliquet donec morbi convallis pretium.
        </p>
      </div>

      <div>
        <Swiper
          spaceBetween={20}
          slidesPerView={3} // Display 3 slides at once
          centeredSlides={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {/* Swiper Slides */}
          {[...Array(totalSlides)].map((_, index) => (
            <SwiperSlide
              key={index}
              className={`bg-base-200 p-6 md:p-10 flex flex-col md:flex-row h-[344px] justify-center items-center rounded-md gap-5 md:gap-10 transition-all duration-300`}
              style={{
                flex: index === activeIndex ? "0 0 80%" : "0 0 5%",
                transition: "flex 0.3s ease",
              }}
            >
              <img
                src={testimonial}
                alt={`slide ${index + 1}`}
                className="w-40 h-40 md:w-[235px] md:h-[235px] rounded-full object-cover"
              />
              <div className="flex-1 space-y-4 md:space-y-5 relative text-center md:text-left px-4 md:pr-10">
                <p className="text-base md:text-xl">
                  <span className="text-[#FD6F00] text-2xl sm:text-3xl md:text-4xl">
                    "
                  </span>
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim
                  malesuada commodo ultrices.
                  <span className="text-[#FD6F00] text-2xl sm:text-3xl md:text-4xl">
                    "
                  </span>
                </p>
                <div>
                  <h1 className="text-xl md:text-2xl font-semibold">Name</h1>
                  <h1 className="text-lg md:text-xl">CEO</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Controls */}
        <div className="flex justify-center mt-6 space-x-4">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-12 h-4 md:w-14 rounded-full transition-all ${
                activeIndex === index ? "bg-[#FD6F00]" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
