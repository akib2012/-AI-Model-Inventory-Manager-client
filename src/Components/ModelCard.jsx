import React from "react";

const ModelCard = ({ model }) => {
  const {image, name, framework, description} = model;
  return (
    <div>
      <div class="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:scale-105">
        <div class="relative mx-4 -mt-6 h-40 overflow-hidden border-2 border-blue-500 rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"> <img src={image} alt="" /></div>
        <div class="p-6">
          <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {name}
          </h5>
          <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description}
          </p>
        </div>
        <div class="p-6 pt-0">
          <button
            data-ripple-light="true"
            type="button"
            class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            View detils
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
