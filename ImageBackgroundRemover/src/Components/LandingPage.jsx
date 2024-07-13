import React from "react";
import Lottie from "lottie-react";
import HomePageAnimation from "../assets/Animation/HomePageAnimation.json";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <section className="text-center pt-" id="home">
      <div className="w-96 h-96 mx-auto mb-8">
        <Lottie animationData={HomePageAnimation} loop={true} />
      </div>
      <h1 className="text-5xl font-bold mb-4">Welcome to Image Uploader</h1>
      <p className="text-xl mb-8">
        Upload your images and let our system remove the background
        effortlessly.
      </p>
      <button
        className="bg-white text-blue-500 hover:bg-gray-200 font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        onClick={() => navigate("/generate-image")}
      >
        Get Started
      </button>
    </section>
  );
};

export default LandingPage;
