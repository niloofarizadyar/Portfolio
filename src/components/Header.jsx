import React from "react";
import headerImage from "./../assets/Header.JPG";
import { motion } from "framer-motion";

const headerVariant = {
  hidden: {
    opacity: 0,
    x: -90,
    transition: {
      stiffness: 50,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      stiffness: 1,
      delay: 1,
    },
  },
};

const Header = () => {
  return (
    <div className="relative flex items-center">
      <img className="w-full" src={headerImage} />
      <motion.div
        variants={headerVariant}
        initial="hidden"
        whileInView="show"
        className="absolute left-[5%]"
      >
        <p className="text-1xl md:text-3xl lg:text-5xl font-bold">
          Hello, my name is <br />
          <span className="text-darkRoseBrown">Nazanin</span>
        </p>
        <p className="text-1xl md:text-3xl lg:text-5xl mt-2">
          I'm <span className="text-darkRoseBrown">Freelancer Designer</span>.
        </p>
        {/* href should be changed to download link. */}
        <a target="_blank" href="https://drive.google.com/file/d/1jctO8hEY9WjZjeKEF3aaeEaJwQMsjO_7/view?usp=sharing">
          <button className="text-[10px] text-black font-semibold md:text-sm text-center p-2 px-4 mt-2 bg-lightRoseBrown hover:bg-darkRoseBrown transition-colors duration-500 ease-in-out rounded">
            Get CV
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default Header;
