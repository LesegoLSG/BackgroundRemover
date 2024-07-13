import React from "react";
import FinalFingerSnap from "../assets/FinalFingerSnap.png";

const About = () => {
  return (
    <section
      className="w-full h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex justify-center items-center"
      id="who we are"
    >
      <div className="w-full md:w-[70%] h-auto flex flex-col md:flex-row justify-center items-center px-6 ">
        {/* Title and subtitle */}
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl text-white">
            Remove backgrounds 100% automatically in 5 seconds with one click
          </h1>
          <p className="text-lg">
            Thanks to remove.bg's clever AI, you can slash editing time - and
            have more fun!
            <br />
            No matter if you want to make a background transparent (PNG), add a
            white background to a photo, extract or isolate the subject, or get
            the cutout of a photo - you can do all this and more with remove.bg.
          </p>
        </div>
        {/* Image */}
        <div className="w-full flex flex-col justify-center items-center my-8 md:m-0">
          <img src={FinalFingerSnap} alt="One Click" />
        </div>
      </div>
    </section>
  );
};

export default About;
