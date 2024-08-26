"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Container from "./container";
import imgCardProject from "../assets/image (1).png";
import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Three Vital Skills Every Tech Project Manager Should Master",
    category: "Projects",
    description:
      "Whether you're a seasoned professional or just starting, mastering a unique blend of technical proficiency, leadership, and adaptability is essential.",
    assets: "../assets/image (1).png",
  },
  {
    id: 2,
    title: "Gamification in UI/UX: A Fun Journey in Digital Transformation",
    category: "Projects",
    description:
      "While game design is dedicated to creating playful experiences, gamification is more like the art of designing systems that captivate and shape user behavior.",
    assets: "../assets/image (1).png",
  },
  {
    id: 3,
    title: "Elevating Your Project with the Right Technology",
    category: "Projects, Technologies",
    description:
      "Choosing the correct programming language for a software project is an important decision affecting the software's success, quality, cost, and delivery time.",
    assets: "../assets/image (1).png",
  },
  {
    id: 4,
    title: "5 Common Project Risk Examples and How to Manage Them",
    category: "Projects",
    description:
      "Project risks are inevitable in any enterprise, and understanding them is critical to a project's success.",
    assets: "../assets/image (1).png",
  },
  {
    id: 5,
    title: "From Chaos to Clarity: Defining Priorities in Project Management",
    category: "Projects",
    description:
      "In the fast-paced, dynamic world of project management, the ability to prioritize tasks effectively is akin to possessing a superpower.",
    assets: "../assets/image (1).png",
  },
  {
    id: 6,
    title: "Stakeholder Feedback: How Reviews Shape Project Success",
    category: "Projects",
    description:
      "In the dynamic landscape of tech projects, success hinges on the team's innovative prowess and their ability to understand, interpret, and execute based on stakeholder feedback.",
    assets: "../assets/image (1).png",
  },
  {
    id: 7,
    title: "07 Best Practices in Software Project Management",
    category: "Projects",
    description:
      "Project management transcends industries, serving as the cornerstone of successful endeavors in every field, with software development being no exception.",
    assets: "../assets/image (1).png",
  },
  {
    id: 8,
    title:
      "“Aldeia Mãe” blog is a safe haven for parents of children with specific needs",
    category: "Projects",
    description:
      "When it's time to become a parent, life changes completely - it's a unique, special moment, and there's nothing else like it.",
    assets: "../assets/image (1).png",
  },
];

const Project = () => {
  return (
    <div className="flex justify-center mt-20">
      <Container>
        <h2 className="font-bold text-center text-3xl">
          Destaque Projetos da Buzzvel
        </h2>
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect={"coverflow"}
          loop={true}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          centeredSlides={true}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
          }}
          className="coverflow mt-10"
          style={{ paddingBottom: "40px" }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                className="project-slide mt-5 bg-white rounded-lg shadow-md overflow-hidden p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }} // animação com delay
              >
                <Image
                  src={imgCardProject}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  width={100}
                  height={100}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-red-500 font-medium mb-2">
                    {item.category}
                  </p>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Project;
