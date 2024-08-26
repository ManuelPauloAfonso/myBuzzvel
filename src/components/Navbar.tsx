"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import Logo from "../assets/Brand-logo.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "#Experience" },
    { id: 3, name: "Works", link: "#skills" },
  ];

  return (
    <header className="flex justify-between items-center p-5 md:justify-around">
      <Link href="/">
        <Image alt="Company logo displaying the Buzzvel brand" src={Logo} />
      </Link>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-12">
          {items.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link className="cursor-pointer" href={item.link}>
                {item.name}
              </Link>
            </motion.li>
          ))}
          <Button>
            <Link href="#contact">Contactar</Link>
          </Button>
        </ul>
      </nav>

      <div className="block md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? (
            <Cross2Icon className="w-6 h-6 text-black" />
          ) : (
            <HamburgerMenuIcon className="w-6 h-6 text-black" />
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-white p-5 shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-5">
            {items.map((item, index) => (
              <li key={item.id}>
                <Link href={item.link} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
            <Button onClick={() => setIsOpen(false)}>
              <Link href="#contact">Contactar</Link>
            </Button>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
