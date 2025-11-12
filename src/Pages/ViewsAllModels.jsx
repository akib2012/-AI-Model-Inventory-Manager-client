import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../Components/ModelCard";

const ViewsAllModels = () => {
  const models = useLoaderData();
  const [model, setModel] = useState(models);
  const [loading, setLoading] = useState(false);

  // 🔍 handle search submit
  const handlsearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value.trim();

    // if empty -> reset to all models
    if (search === "") {
      setModel(models);
      return;
    }

    setLoading(true);
    fetch(`http://localhost:3000/search?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setModel(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  // ✖ auto-reset when user clears input
  const handleChange = (e) => {
    if (e.target.value === "") {
      setModel(models);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#001D6E] via-[#000814] to-[#000814] min-h-screen text-white">
      <h4 className="text-center text-3xl font-bold py-12">
        Available Models
      </h4>

      {/* Search Form */}
      <form
        onSubmit={handlsearch}
        className="text-center mb-12 flex justify-center items-center gap-2"
      >
        <label className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            name="search"
            type="search"
            placeholder="Search..."
            onChange={handleChange}
            className="outline-none bg-transparent text-black"
          />
        </label>

        <button
          type="submit"
          className="btn rounded-full bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Models Grid */}
      <div className="max-w-10/12 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-5 pb-12">
        {model.length > 0 ? (
          model.map((m) => <ModelCard model={m} key={m._id} />)
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No models found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewsAllModels;
