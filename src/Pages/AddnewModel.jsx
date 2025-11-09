import React from "react";

const AddnewModel = () => {


    
  return (
    <div className="my-12">
      <div class=" bg-[#1E293B]/70 backdrop-blur-lg rounded-2xl shadow-lg w-full  p-8 text-gray-200 border-2 border-amber-300 shadow-amber-50 mx-5 max-w-fit md:max-w-6/12 md:m-auto ">
        <h1 class="text-3xl font-bold text-[#6C63FF] mb-6 text-center">
          Add New Model
        </h1>

        <form class="space-y-5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              placeholder="Model Name"
              class="bg-[#0F172A]/70 p-3 rounded-lg border border-[#6C63FF]/30 text-gray-200"
            />
            <input
              placeholder="Framework"
              class="bg-[#0F172A]/70 p-3 rounded-lg border border-[#6C63FF]/30 text-gray-200"
            />
            <input
              placeholder="Use Case"
              class="bg-[#0F172A]/70 p-3 rounded-lg border border-[#6C63FF]/30 text-gray-200"
            />
            <input
              placeholder="Dataset"
              class="bg-[#0F172A]/70 p-3 rounded-lg border border-[#6C63FF]/30 text-gray-200"
            />
          </div>

          <input
            placeholder="Model Image URL"
            class="bg-[#0F172A]/70 p-3 w-full rounded-lg border border-[#6C63FF]/30 text-gray-200"
          />

          <textarea
            placeholder="Description"
            rows="4"
            class="bg-[#0F172A]/70 p-3 w-full rounded-lg border border-[#6C63FF]/30 text-gray-200"
          ></textarea>

          <input
            placeholder="Creator Email"
            class="bg-[#0F172A]/70 p-3 w-full rounded-lg border border-[#6C63FF]/30 text-gray-200"
          />

          <button
            type="submit"
            class="w-full bg-[#00C9A7] text-[#0F172A] font-semibold py-3 rounded-lg hover:shadow-[0_0_15px_rgba(0,201,167,0.5)] transition-all"
          >
            Add Model
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddnewModel;
