import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const ItemSkill = ({ skill, percentage, image }) => {
  const skillVariant = {
    hidden: {
      width: "0%",
    },
    show: {
      width: `${percentage}%`,
      transition: {
        duration: 1,
      },
    },
  };

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="bg-neutral-950 p-3  w-[500px]">
      <div className="flex flex-row items-center mb-3">
        <img src={image} className="w-[50px] h-[50px]" />
        <p className="flex-1 ml-3">{skill}</p>

        <ScrollTrigger
          onEnter={() => setIsVisible(true)}
          onExit={() => setIsVisible(false)}
        >
          {isVisible && (
            <CountUp
              className="justify-end"
              start={0}
              end={percentage}
              duration={1}
              startOnMount={true}
            />
          )}
          %
        </ScrollTrigger>
      </div>
      <div className="w-full border-2 border-darkRoseBrown border-solid rounded-full">
        <motion.div
          className="bg-darkRoseBrown h-3 rounded-full"
          variants={skillVariant}
          initial="hidden"
          whileInView="show"
        ></motion.div>
      </div>
    </div>
  );
};

export default ItemSkill;
