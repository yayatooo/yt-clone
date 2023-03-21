import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ videos }) => {
  const { snippet, id } = videos;
  return (
    <div>
      <Link to={`/video/${id.videoId}`}>
        <img
          src={snippet.thumbnails.high.url}
          alt="thumbnail"
          className="w-full"
        ></img>
        <div className="p-3">
          <h1 className="font-medium">{snippet.title}</h1>
          <p className="font-light">{snippet.channelTitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
