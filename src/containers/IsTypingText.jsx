import React from "react";
import { motion } from "framer-motion";

export const textVariant = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const letterVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

const IsTypingText = ({ title }) => {
  return (
    <motion.p
      variants={textVariant}
      className="font-bold text-[30px] text-lightRoseBrown pb-3"
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={letterVariant} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default IsTypingText;
