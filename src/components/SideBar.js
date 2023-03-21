import React from "react";
import { categories } from "../utils/Utility";

const SideBar = ({ selectCategory, setSelectCategory, setVideos }) => {
  return (
    <>
      {categories.map((category, i) => {
        return (
          <button
            onClick={() => {
              setSelectCategory(category.name);
              setVideos([]);
            }}
            key={i}
            className=" p-2 flex  sm:flex-row items-center sm:justify-start sm:py-3"
            style={{
              backgroundColor:
                selectCategory === category.name ? "red" : "white",
              color: selectCategory === category.name ? "white" : "black",
            }}
          >
            <span className="mr-2">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        );
      })}
    </>
  );
};

export default SideBar;
