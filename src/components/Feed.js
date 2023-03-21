import React from "react";
import SideBar from "./SideBar";
import { useState, useEffect } from "react";
import { fetchApi } from "../utils/FetchApi";
import Videos from "./Videos";

export default function Feed() {
  const [selectCategory, setSelectCategory] = useState("Coding");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchApi(`search?part=snippet,id&q=${selectCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectCategory]);
  return (
    <div className="flex flex-col sm:flex-row">
      <div className=" py-2 flex sm:flex-col overflow-auto sm:basis-3/12 ">
        <SideBar
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
          setVideos={setVideos}
        />
      </div>
      <div className="bg-gray-50 sm:basis-9/12">
        <Videos videos={videos} />
      </div>
    </div>
  );
}
