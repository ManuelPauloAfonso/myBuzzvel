"use client";
import React from "react";
import Container from "./container";
import { motion } from "framer-motion";
import { LaptopIcon, ImageIcon, MobileIcon } from "@radix-ui/react-icons";

export default function Experience() {
  const experiencesData = [
    {
      title: "FrontEnd Developer",
      location: "MusicPRO",
      description:
        "Participated in the maintenance and implementation of new features in the system. Actively sought new solutions and technologies to improve the platform and enhance the user experience.",
      date: "Jan 2023 - Present",
      icon: <LaptopIcon className="text-gray-700" />,
    },
    {
      title: "FrontEnd Developer",
      location: "Fieldright",
      description:
        "Led the front-end implementation of the administrative panel, from conception to delivery. Ensured an intuitive and efficient management interface that met customer needs and delivered a positive user experience.",
      date: "Jan 2021 - Dec 2022",
      icon: <ImageIcon className="text-gray-700" />,
    },
    {
      title: "Mobile Programmer",
      location: "GLOBALINKS",
      description:
        "Actively participated in the development of a security management platform for Cape Verde using technologies like React Native, JavaScript, and Expo. Contributed significantly to the project's success through knowledge sharing and expertise.",
      date: "Jan 2020 - Jul 2020",
      icon: <MobileIcon className="text-gray-700" />,
    },
  ];

  return (
    <section id="experience" className="flex justify-center px-4 md:px-0 mt-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold">My Experience</h2>
          <p className="mt-5 text-lg text-[#A8A8A8]">
            Based in Portugal, I specialize in creating high-quality, impactful
            digital solutions. Discover how my expertise and experience can
            drive innovation and success in your projects.
          </p>
        </div>
        <div className="relative mt-10">
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
            {experiencesData.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <div className="flex justify-center items-center mb-4">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    <div className="text-3xl text-gray-700">{item.icon}</div>
                  </div>
                </div>
                <p className="text-gray-400 mb-2">{item.date}</p>
                <h4 className="font-bold text-lg md:text-xl">{item.title}</h4>
                <p className="font-medium">{item.location}</p>
                <p className="text-gray-900 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
