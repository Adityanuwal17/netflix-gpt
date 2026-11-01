import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[25%] md:pt-[20%] px-6 md:px-16 text-white bg-linear-to-r from-black">
      <h1 className="font-bold text-2xl md:text-5xl">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-6/12">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white cursor-pointer text-black p-2 px-4 md:p-4 md:px-8 text-xl rounded-lg hover:bg-white/80">
          ▶ Play
        </button>
        <button className="bg-gray-500/50 cursor-pointer mx-2 text-white p-2 px-4 md:p-4 md:px-8 text-xl rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
