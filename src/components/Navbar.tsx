"use client";
import { Button } from "./ui/button";
import Logo from "../assets/Brand-logo.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const items = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Works", link: "/skills" },
  ];
  return (
    <header className="flex justify-around pt-10 items-center">
      <Link href={"/"}>
        <Image alt="Company logo displaying the Buzzvel brand" src={Logo} />
      </Link>
      <nav>
        <ul className="flex items-center gap-12">
          {items.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link className="cursor-pointer " href={"/"}>
                {item.name}
              </Link>
            </motion.li>
          ))}
          <Button>Contactar</Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
