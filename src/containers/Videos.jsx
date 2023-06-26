import React from "react";
import { videos } from "./../assets/Contents";

const Videos = () => {
  return (
    <div className="py-[40px] p-3 flex justify-center">
      {videos.map((item) => (
        <iframe
          key={item.id}
          src={item.src}
          className="w-[750px] h-[450px]"
        ></iframe>
      ))}
    </div>
  );
};

export default Videos;
