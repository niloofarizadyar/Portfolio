import React from "react";
import contact from "./../assets/Contact.jpg";
import { FormContainer } from "../containers";
import { motion } from "framer-motion";

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

const Contact = () => {
  return (
    <div id="contact" className="bg-oddBgColor py-[40px] p-3">
      <p className="font-bold text-[30px] text-lightRoseBrown pb-3 text-center">
        Contact Me
      </p>
      <div className="flex flex-wrap justify-center gap-2 w-full p-3 py-[40px]">
        <motion.img
          variants={imageVariant}
          initial="hidden"
          whileInView="show"
          src={contact}
          className="w-[500px] h-[450px] object-cover"
        />
        <div className="p-2 text-justify w-[500px]">
          <FormContainer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
