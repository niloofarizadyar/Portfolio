import React from "react";
import { cards } from "../assets/Contents";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Cards = () => {
  return (
    <div className="py-[40px] p-3 flex gap-2 flex-wrap justify-center">
      {cards.map((item) => (
        <LazyLoadImage
          key={item.id}
          className="w-[300px] h-[180px] object-cover"
          src={item.src}
        />
      ))}
    </div>
  );
};

export default Cards;
