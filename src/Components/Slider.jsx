import React from "react";
import slideimg from '../assets/images.jpeg';

const Slider = () => {
  return (
    <div className="">
      <div
        className=" relative w-full h-[40vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${slideimg})`,
        }}
      >
        <div className="text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[#f1f3f6] mb-4">
            Manage AI Models Efficiently
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mb-6 text-base md:text-lg">
            Organize, track, and explore all your machine learning models in one
            place. Build smarter, faster, and collaborate seamlessly with AI
            developers worldwide.
          </p>

          <a
            href="#"
            className="bg-[#ce23f0] text-[#0F172A] px-6 py-2 rounded-lg font-semibold hover:shadow-[0_0_15px_rgba(0,201,167,0.6)] transition-all"
          >
            Explore Models
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
      </div>
    </div>
  );
};

export default Slider;
