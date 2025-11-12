import React from 'react';
import slide1 from '../assets/images1.jpeg'

const Slide2 = () => {
    return (
        <div>
             <div
                    className=" relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center"
                    style={{
                      backgroundImage:
                        `url(${slide1})`,
                    }}
                  >
                    <div className="text-center px-4 md:px-12">
                      <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Collaborate and Innovate
                      </h1>
            
                      <p className="text-[#f30963] max-w-2xl mx-auto mb-6 text-base md:text-md">
                       Work together effortlessly. Share models, review updates, and speed up experimentation with real-time collaboration
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

export default Slide2;