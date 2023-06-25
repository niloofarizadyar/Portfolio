import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ponisha from "./../assets/ponisha.png";

const Footer = () => {
  return (
    <div className="p-3 py-[40px] flex flex-wrap  text-center justify-center gap-2 mx-auto">
      <div className="flex justify-start flex-row w-[400px] p-3 bg-oddBgColor">
        <EmailIcon className="text-lightRoseBrown" />
        <p className="pl-3">nazaninizadyar1400@gmail.com</p>
      </div>
      <div className="flex justify-start flex-row w-[400px] p-3 bg-oddBgColor">
        <LinkedInIcon className="text-lightRoseBrown" />
        <a
          href="https://www.linkedin.com/in/nazaninizadyar/"
          target="_blank"
          className="pl-3"
        >
          in/nazaninizadyar
        </a>
      </div>
      <div className="flex justify-start flex-row w-[400px] p-3 bg-oddBgColor">
        <img className="w-[24px]" src={ponisha} />
        <a
          href="https://ponisha.ir/profile/nazaninizadyar"
          target="_blank"
          className="pl-3"
        >
          nazaninizadyar
        </a>
      </div>
    </div>
  );
};

export default Footer;
