import React from "react";
import aboutImage from "./../assets/About.JPG";
import { AboutMe } from "../assets/Contents";
import { motion } from "framer-motion";
import { IsTypingText } from "../containers";

const imageVariant = {
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

const paragraphVariant = {
  hidden: {
    opacity: 0,
    y: 20,
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

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

const About = () => {
  return (
    <div id="about" className="flex flex-wrap justify-center gap-2 w-full p-3">
      <motion.img
        variants={imageVariant}
        initial="hidden"
        whileInView="show"
        src={aboutImage}
        className="w-[200px] h-[300px] object-cover"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="p-2 text-justify w-[500px]"
      >
        <IsTypingText title="About me" />
        <motion.div
          variants={paragraphVariant}
          initial="hidden"
          whileInView="show"
        >
          {AboutMe.description}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
