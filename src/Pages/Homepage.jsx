import React from "react";
import Herosection from "../Components/Herosection";
import Getstrted from "../Components/Getstrted";
import RecentModel from "../Components/RecentModel";
import AboutAimodel from "../Components/AboutAimodel";
import Footer from "../Components/Footer";

const Homepage = () => {
  return (
    <div >
      <div className=" pt-12 -mt-[30px]   bg-gradient-to-br from-[#000814] via-[#000814] to-[#001D6E]">
        <Herosection ></Herosection>
        <Getstrted></Getstrted>
      </div>

      <div className="bg-black">
            <RecentModel></RecentModel>
            <AboutAimodel></AboutAimodel>
          

      </div>
    </div>
  );
};

export default Homepage;
