import React from "react";
import LandingPage from "../Components/LandingPage";
import About from "../Components/About";
import Demonstration from "../Components/Demonstration";
import Header from "../Components/Header";

const HomePage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <Header />
      <LandingPage />
      <About />
      <Demonstration />
    </section>
  );
};

export default HomePage;
