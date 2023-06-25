import React, { useState } from "react";
import navbarLogo from './../assets/Logo.png'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const navbarVariant = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      stiffness: 50,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 1,
      delay: 0.5,
    },
  },
};

const NavigationItem = ({ href, text }) => {
  return (
    <a
      href={href}
      className="text-center w-full p-3 hover:bg-black hover:text-lightRoseBrown transition-colors duration-500 ease-in-out rounded"
    >
      {text}
    </a>
  );
};

const MenuItems = ({ active }) => {
  return (
    
    <div>
      <div className="rounded shadow bg-black bg-opacity-40 backdrop-blur-sm flex flex-col w-36 items-center absolute right-0 top-14 md:hidden">
        <NavigationItem href="#about" text="About" />
        <NavigationItem href="#skills" text="Skills" />
        <NavigationItem href="#collections" text="Collections" />
        <NavigationItem href="#contact" text="Contact Me" />
      </div>
    </div>
  );
};

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      variants={navbarVariant}
      initial="hidden"
      whileInView="show"
      className="absolute flex items-center w-full px-5 h-14 z-10"
    >
      <div className="flex-1 p-2">
        <img className="w-[40px] md:w-[50px]" src={navbarLogo} />
      </div>
      <div className="hidden md:block flex-none flex justify-end items-center">
        <NavigationItem href="#about" text="About" />
        <NavigationItem href="#skills" text="Skills" />
        <NavigationItem href="#collections" text="Collections" />
        <NavigationItem href="#contact" text="Contact Me" />
      </div>
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setActive(!active)}
      >
        {!active ? (
          <MenuIcon className="text-lightRoseBrown" />
        ) : (
          <CloseIcon className="text-lightRoseBrown" />
        )}
      </div>
      {active && <MenuItems active={active} />}
    </motion.div>
  );
};

export default Navbar;
