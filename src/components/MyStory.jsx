import React from "react";
import { Sparkles, Code, Trophy, Brain, Target } from "lucide-react";
import bgVideo from "../assets/mystory.mp4"; // Update path if needed
const timeline = [
  {
    year: "2021–2022",
    title: "Early Exploration",
    icon: Sparkles,
    description:
      "Began learning Python and SQL through the school curriculum. Driven by curiosity, I went beyond the syllabus to build multiple mini-projects independently, laying the foundation for my programming journey.",
  },
  {
    year: "2023",
    title: "Fundamentals in Development",
    icon: Code,
    description:
      "Gained proficiency in HTML and CSS, completing the FreeCodeCamp Responsive Web Design certification. Simultaneously learned C programming, strengthening my understanding of core programming concepts.",
  },
  {
    year: "Jan–June 2024",
    title: "Advancing in JavaScript",
    icon: Brain,
    description:
      "Deepened my knowledge of JavaScript, mastering key concepts and applying them to dynamic frontend projects. Additionally, I explored C++ to enhance my algorithmic thinking.",
  },
  {
    year: "June 2024–Jan 2025",
    title: "Hackathons & MERN Stack",
    icon: Trophy,
    description:
      "Actively participated in multiple hackathons, consistently ranking in the top 10. Developed several personal projects using HTML, CSS, and JavaScript, and began working with the MERN stack to transition into full-stack development.",
  },
  {
    year: "2025",
    title: "Professional Growth",
    icon: Target,
    description:
      "Engaged in 10–15 technology events and was selected for a prestigious hackathon at Microsoft's Noida campus. Successfully completed my first full-stack project, 'Spend Smart', in May, followed by a college website internship — a significant opportunity that enhanced my real-world development experience.",
  },
];

const MyStory = () => {
  return (
    <section
      id="my-story"
      className="relative py-16 sm:py-20 bg-black text-white overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 sm:mb-16">
          Love Story
        </h2>

        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-pink-500 z-0 rounded-full" />

          <div className="space-y-14 sm:space-y-20 relative z-10">
            {timeline.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col items-center md:flex-row ${
                    isLeft ? "md:flex-row-reverse" : ""
                  } group`}
                >
                  {/* Icon */}
                  <div className="z-20 mb-4 md:mb-0 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 grid place-items-center bg-white rounded-full border-4 border-blue-500 shadow-md">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 px-2 sm:px-4">
                    <div className="bg-transparent p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                      <h3 className="text-xl sm:text-2xl font-semibold">
                        {event.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                        {event.year}
                      </p>
                      <p className="text-sm sm:text-base text-gray-200">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
