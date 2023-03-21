import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "../utils/FetchApi";
import ReactPlayer from "react-player";
import VideoCard from "./VideoCard";

const VideoDetails = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videoSuggest, setVideoSuggest] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchApi(`videos?part=contentDetails,snippet,statistics&id=${id}`).then(
      (data) => setVideoDetails(data.items[0])
    );
    fetchApi(`search?part=id,snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideoSuggest(data.items)
    );
  }, [id]);
  // console.log(videoSuggest);
  console.log(videoDetails);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:basis-9/12 lg:basis-8/12">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          width="100%"
        />
        <div className="p-4">
          <h1 className="text-lg font-medium">{videoDetails?.snippet.title}</h1>
          <p className="text-lg font-light mb-4">
            {videoDetails?.statistics.viewCount} Views
          </p>
          <hr />
          <p className="mt-4 mb-4">{videoDetails?.snippet.description}</p>
          <hr />
        </div>
      </div>
      <div className="grid grid-cols-1 pl-5 pr-5 md:basis-3/12 lg:basis-4/12">
        {videoSuggest?.map((videos, i) => {
          return <VideoCard key={i} videos={videos} />;
        })}
      </div>
    </div>
  );
};

export default VideoDetails;
