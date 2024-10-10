import { useState } from "react";
import img1 from "../assets/projects/img1.png";
import img2 from "../assets/projects/img2.png";
import img3 from "../assets/projects/img3.png";
import img4 from "../assets/projects/img4.png";
import img5 from "../assets/projects/img5.png";
import img6 from "../assets/projects/img6.png";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Array of project categories and their content
  const projectItems = [
    {
      id: "uiux",
      name: "UI/UX",
      details: [
        {
          image1: img1,
          image2: img2,
          imageDetails: "AirCalling Landing Page Design",
        },
      ],
    },
    {
      id: "webDesign",
      name: "Web Design",
      details: [
        {
          image1: img3,
          image2: img4,
          imageDetails: "Business Landing Page Design",
        },
      ],
    },
    {
      id: "appDesign",
      name: "App Design",
      details: [
        {
          image1: img5,
          image2: img6,
          imageDetails: "Ecom Web Page Design",
        },
      ],
    },
    {
      id: "graphicDesign",
      name: "Graphic Design",
      details: [
        {
          image1: img1,
          image2: img2,
          imageDetails: "AirCalling Landing Page Design",
        },
      ],
    },
  ];

  // Merge all project details when "all" tab is active
  const allProjects = projectItems.flatMap((project) => project.details);

  const displayedProjects =
    activeTab === "all"
      ? allProjects
      : projectItems.find((item) => item.id === activeTab)?.details || [];

  return (
    <div className="space-y-8 mt-32 max-sm:mb-36 max-md:mb-28">
      <div className="space-y-5">
        <h1 className="font-poppins dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center">
          My Projects
        </h1>
        <p className="font-poppins dark:text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus <br className="max-lg:hidden" /> netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>

      {/* Custom Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <button
          className={`font-poppins border-[1px] border-solid border-gray-700 text-lg sm:text-xl lg:text-2xl font-normal rounded-md px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 ${
            activeTab === "all"
              ? "bg-[#FD6F00] text-white"
              : "bg-gray-200 hover:bg-[#FD6F00]"
          } transition-colors duration-300`}
          onClick={() => handleTabClick("all")}
        >
          All
        </button>
        {projectItems.map((project) => (
          <button
            key={project.id}
            className={`font-poppins border-[1px] border-solid border-gray-700 text-lg sm:text-xl lg:text-2xl font-normal rounded-md px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 ${
              activeTab === project.id
                ? "bg-[#FD6F00] text-white"
                : "bg-gray-200 hover:bg-[#FD6F00] hover:text-white hover:border-transparent"
            } transition-colors duration-300`}
            onClick={() => handleTabClick(project.id)}
          >
            {project.name}
          </button>
        ))}
      </div>

      {/* Project Items */}
      <div className="flex max-md:flex-col justify-center items-center gap-5 max-md:gap-28">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-[#FFEBDB] rounded-lg shadow-lg h-[425px] p-3 w-[290px] relative"
          >
            <div className="flex justify-center relative">
              <img
                src={project.image1}
                alt={project.imageDetails}
                className="h-[350px] w-[200px] absolute left-0 top-[40px] z-50 bottom-0 overflow-hidden"
              />
              <img
                src={project.image2}
                alt={project.imageDetails}
                className="h-[390px] w-[210px] absolute top-0 left-14 z-10 bottom-0 overflow-hidden"
              />
            </div>
            {/* Display Project Name and Details */}
            <div className="text-left mt-4 absolute top-[420px]">
              <h3 className="font-poppins text-base mb-1 text-[#FD6F00]">
                {activeTab === "all"
                  ? projectItems.find((item) => item.details.includes(project))
                      .name
                  : projectItems.find((item) => item.id === activeTab).name}
              </h3>
              <p className="font-poppins font-semibold text-lg dark:text-white">
                {project.imageDetails}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
