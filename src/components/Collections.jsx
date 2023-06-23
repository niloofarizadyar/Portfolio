import React, { useState } from "react";
import { Cards, Catalogs, Videos } from "../containers";

const Collections = () => {
  const items = ["Card", "Catalog", "Video"];
  const [view, setView] = useState(items[0]);
  console.log(view);

  const ViewHandler = (item) => {
    setView(item);
  };

  return (
    <div id="collections" className="py-[40px] p-3 flex justify-center flex-col">
      <p className="font-bold text-[30px] text-lightRoseBrown pb-3 text-center">
        Collections
      </p>
      <div className="flex flex-row  w-3/4 text-center justify-center mx-auto">
        {items.map((item) => (
          <div
            key={item}
            onClick={() => ViewHandler(item)}
            className={`flex-1 p-3 ${
              view == item
                ? "border-darkRoseBrown border-b-2"
                : "border-b border-transparent transition duration-300 hover:border-darkRoseBrown border-b-2"
            } cursor-pointer `}
          >
            {item}
          </div>
        ))}
      </div>
      <di className="bg-oddBgColor p-3">
        {view === "Card" ? (
          <Cards />
        ) : view === "Catalog" ? (
          <Catalogs />
        ) : (
          <Videos />
        )}
      </di>
    </div>
  );
};

export default Collections;
