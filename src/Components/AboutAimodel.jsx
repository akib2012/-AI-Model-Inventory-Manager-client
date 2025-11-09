import React from "react";

const AboutAimodel = () => {
  return (
    <div className="max-w-10/12 m-auto pb-9">
        <h3 className="text-center text-2xl font-bold">About Ai model</h3>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="bg-[#1E293B] p-6 rounded-xl shadow hover:shadow-[0_0_10px_rgba(108,99,255,0.3)]">
          <h3 className="text-[#00C9A7] text-xl font-semibold mb-2">
            🧠 Neural Networks
          </h3>
          <p className="text-gray-400 text-sm">
            Mimic how human brain learns patterns from data.
          </p>
        </div>

        <div className="bg-[#1E293B] p-6 rounded-xl shadow hover:shadow-[0_0_10px_rgba(108,99,255,0.3)]">
          <h3 className="text-[#00C9A7] text-xl font-semibold mb-2">
            💬 NLP Models
          </h3>
          <p className="text-gray-400 text-sm">
            Understand and generate natural human language.
          </p>
        </div>

        <div className="bg-[#1E293B] p-6 rounded-xl shadow hover:shadow-[0_0_10px_rgba(108,99,255,0.3)]">
          <h3 className="text-[#00C9A7] text-xl font-semibold mb-2">
            🖼️ Vision AI
          </h3>
          <p className="text-gray-400 text-sm">
            Identify and classify objects from visual data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAimodel;
