import React from "react";
import bg from "../assets/22555-328624767_small.mp4"
export default function NightSkyBackground({ overlay = true }) {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
      >
        <source src={bg} type="video/mp4" />
      </video>

      {/* Optional dark overlay for content readability */}
      {overlay && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-[-1]" />
      )}
    </>
  );
}
