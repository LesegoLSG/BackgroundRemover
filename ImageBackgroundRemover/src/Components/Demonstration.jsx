import React, { useState } from "react";
import FinalFingerSnap from "../assets/FinalFingerSnap.png";
import TransparentBackground from "../assets/TransparentBackground.png";
import Test from "../assets/Test.jpeg";
import TestNoBG from "../assets/TestNoBG.png";
const Demonstration = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <section
      className="w-full h-screen flex flex-col items-center justify-center max-w-6xl mx-auto p-8  rounded-lg mt-2"
      id="erase in motion"
    >
      <h1 className="text-4xl font-bold mb-4 text-white">Stunning Quality</h1>
      <p className="text-xl font-medium mb-6 text-white">
        Remove backgrounds 100% automatically in 5 seconds with one click
      </p>
      <div className="relative w-full h-60 md:h-4/5 max-w-5xl overflow-hidden rounded-lg shadow-md bg-white">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            }}
          >
            <img
              src={Test}
              alt="Original"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute inset-0">
            <img
              src={TestNoBG}
              alt="Background Removed"
              className="w-full h-full object-contain"
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderChange}
            className="absolute inset-0 w-full h-full bg-transparent cursor-pointer appearance-none"
            style={{
              WebkitAppearance: "slider-horizontal",
              appearance: "none",
              outline: "none",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Demonstration;
