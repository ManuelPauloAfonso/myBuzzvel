"use client";
import Container from "./container";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section id="about" className="flex justify-center mt-20 items-center px-4">
      <Container>
        <motion.div
          className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Welcome! <br />
              I&apos;m Manuel Afonso, a Front-End Developer
            </h1>
            <p className="mt-6 md:mt-10 text-md md:text-lg text-[#A8A8A8]">
              Passionate front-end developer with a keen eye for detail and a
              commitment to delivering the highest quality. Proud of my work, I
              continuously strive for self-improvement with each project. My
              expertise spans HTML(5), CSS(3), JavaScript, React.js, Angular,
              and Java Spring, along with SQL. I am well-versed in
              JavaScript/TypeScript, Git/GitHub/GitLab, the React.js/Next.js
              ecosystem, GraphQL, Vue.js/Nuxt.js ecosystem, global state
              management, testing (Jest, Testing Library, Cypress), Tailwind,
              accessibility, UI components libraries, CI/CD, and bundlers
              (Webpack, Vite). I also have experience with React Native (Expo
              CLI).
              <br />
              Additionally, I have solid experience with PHP, SQL, and Ajax, and
              a strong foundation in Object-Oriented Programming (OOP), which
              allows me to design and build robust, scalable, and maintainable
              software solutions.
            </p>
            <Button className="mt-5">Learn More</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Banner;
