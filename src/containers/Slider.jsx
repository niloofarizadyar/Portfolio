import React, {useState} from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const Slider = ({catalog}) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current) => (current == 0 ? 12 - 1 : current - 1));
  };
  const next = () => {
    setCurrent((current) => (current == 12 - 1 ? 0 : current + 1));
  };
  return (
    <div className="w-[300px] md:w-[400px] overflow-hidden relative">
      <div
        className="flex transition-transorm ease-out duration-500 "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {catalog.map((item) => (
          <img
            key={item.id}
            src={item.src}
            className="w-[300px] md:w-[400px]"
          />
        ))}
      </div>

      <div className="absolute inset-0 p-2 flex items-center justify-between">
        <button
          onClick={prev}
          className="bg-black opacity-50 hover:opacity-100 rounded-full transition-opacity duration-500 p-1"
        >
          <NavigateBeforeIcon />
        </button>
        <button
          onClick={next}
          className="bg-black opacity-50 hover:opacity-100 rounded-full transition-opacity duration-500 p-1"
        >
          <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
};

export default Slider;
