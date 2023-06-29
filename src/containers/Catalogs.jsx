import React from "react";
import { Slider } from './../containers'
import { catalogCharity } from "../assets/Contents";
import { catalogSorena } from "../assets/Contents";

const Catalogs = () => {
  
  return (
    <div className="p-3 py-[40px] gap-2 flex flex-wrap justify-center items-center">
      <Slider catalog={catalogCharity} />
      <Slider catalog={catalogSorena} />
    </div>
  );
};

export default Catalogs;
