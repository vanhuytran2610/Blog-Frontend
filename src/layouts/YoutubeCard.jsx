/* eslint-disable react/prop-types */
import React from "react";

const YoutubeCard = ({ video_url }) => {
  return (
    <div className="w-full h-full">
      <iframe
        className="w-full h-full"
        src={video_url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default YoutubeCard;
