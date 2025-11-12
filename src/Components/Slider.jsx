import React from "react";

import slide2 from '../assets/im2.jpg'

const Slider = () => {
  return (
    <div className="">
      <div
        className=" relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${slide2})`,
        }}
      >
        <div className="text-center px-4 md:px-12">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Smarter AI Model Management in One Place
          </h1>

          <p className="text-[#fdfeff] max-w-2xl mx-auto mb-6 text-base md:text-md">
            Easily organize, track, and showcase your AI models. From datasets to deployment — keep everything structured, secure, and accessible with ModelTrack AI.
          </p>

         {/*  <a
            href="#"
            className="bg-[#ce23f0] text-[#0F172A] px-6 py-2 rounded-lg font-semibold hover:shadow-[0_0_15px_rgba(0,201,167,0.6)] transition-all"
          >
            Explore Models
          </a> */}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
      </div>
    </div>
  );
};

export default Slider;
