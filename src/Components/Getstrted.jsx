import React from "react";
import { Link } from "react-router";

const Getstrted = () => {
  return (
    <div >
      <section className=" text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Get Started with AI Model Manager
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Easily manage, track, and explore AI models. Create an account or
            log in to begin organizing your AI model inventory today.
          </p>

          <div className="flex justify-center gap-6">
            {/* <Link
              to="/register"
              className="bg-white text-[#001D6E] font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-opacity-90 transition-all duration-300"
            >
              Get Started
            </Link> */}
            <Link
              to="/ViewsAllModels"
              className="border border-white text-white  px-6 py-3 font-bold rounded-xl hover:bg-white hover:text-[#001D6E] transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Getstrted;
