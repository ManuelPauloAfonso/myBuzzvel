"use client";
import React from "react";
import Container from "./container";
import { FaLaptopCode, FaPalette, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Experience() {
  const experiencesData = [
    {
      title: "FrontEnd Developer",
      location: "MusicPRO",
      description:
        "Participated in the maintenance and implementation of new features in the system. Actively sought new solutions and technologies to improve the platform and enhance the user experience.",
      date: "Jan 2023 - Present",
      icon: <FaLaptopCode />,
    },
    {
      title: "FrontEnd Developer",
      location: "Fieldright",
      description:
        "Led the front-end implementation of the administrative panel, from conception to delivery. Ensured an intuitive and efficient management interface that met customer needs and delivered a positive user experience.",
      date: "Jan 2021 - Dec 2022",
      icon: <FaPalette />,
    },
    {
      title: "Mobile Programmer",
      location: "GLOBALINKS",
      description:
        "Actively participated in the development of a security management platform for Cape Verde using technologies like React Native, JavaScript, and Expo. Contributed significantly to the project's success through knowledge sharing and expertise.",
      date: "Jan 2020 - Jul 2020",
      icon: <FaMobileAlt />,
    },
  ];

  return (
    <section id="experience" className="flex justify-center mt-20">
      <Container>
        <div>
          <h2 className="text-3xl font-bold text-center">My Experience</h2>
          <p className="mt-5 text-lg text-[#A8A8A8] text-center">
            Based in Portugal, I specialize in creating high-quality, impactful
            digital solutions. Discover how my expertise and experience can
            drive innovation and success in your projects.
          </p>
        </div>
        <div className="relative mt-10">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full"></div>
          {experiencesData.map((item, index) => (
            <motion.div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "left-timeline" : "right-timeline"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="order-1 w-5/12 flex justify-center">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <div className="text-3xl text-gray-700">{item.icon}</div>
                </div>
              </div>
              <div className="order-1 w-5/12 px-1 py-4">
                <p className="mb-3 text-base text-gray-400 text-center">
                  {item.date}
                </p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl text-center">
                  {item.title}
                </h4>
                <p className="mb-3 text-sm md:text-base font-medium text-center">
                  {item.location}
                </p>
                <p className="text-sm md:text-base leading-snug text-gray-900 text-center">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
