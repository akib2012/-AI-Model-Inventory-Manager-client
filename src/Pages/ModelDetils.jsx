import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Authcontext from "../ContextAuth/Authcontext";
import LoadingSpinner from "../Components/LoadingSpinner";
import { toast } from "react-toastify";

const ModelDetils = () => {
  const { id } = useParams();
  const [model, setModel] = useState([]);
  const { loading, setLoading, user } = useContext(Authcontext);
  const Navigate = useNavigate();

  // console.log("manage for show and hide edit and delete,", model);

  useEffect(() => {
    fetch(`http://localhost:3000/models/${id}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModel(data);
        setLoading(false);
      });
  }, [id, setModel, setLoading, user]);

  // console.log(mode/l)

  const handlepuchase = () => {
    fetch("http://localhost:3000/my-Purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...model,
        dowloded_by: user.email,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        toast.success("succesfully Puchased");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    

  };
  
    const hnadleedit = () => {
          Navigate(`/edit-page/${model._id}`);
      }

  const {
    name,
    image,
    createdAt,
    purchased,
    useCase,
    description,
    framework,
    createdBy,
    dataset,
  } = model;

  // const hidecondtion = user.email === model.createdBy;

  if (loading) {
    <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <div class="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#000814] via-[#000814] to-[#001D6E] py-10 px-4">
        <div class="bg-[#1E293B]/70 backdrop-blur-lg rounded-2xl shadow-lg w-full max-w-3xl p-8 text-gray-200 border-2 border-amber-300 shadow-amber-50">
          <div class="w-full flex justify-center mb-6">
            <img
              src={image}
              alt="Model Image"
              class="rounded-2xl w-full sm:w-[80%] h-[250px] object-cover border border-[#6C63FF]/30 shadow-lg"
            />
          </div>

          <h1 class="text-3xl font-bold text-[#6C63FF] mb-4 text-center">
            {name}
          </h1>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div class="bg-[#0F172A]/70 p-4 rounded-lg border border-[#6C63FF]/30">
              <p class="text-sm text-gray-400">Framework</p>
              <p class="text-lg font-semibold">{framework}</p>
            </div>

            <div class="bg-[#0F172A]/70 p-4 rounded-lg border border-[#6C63FF]/30">
              <p class="text-sm text-gray-400">Use Case</p>
              <p class="text-lg font-semibold">{useCase}</p>
            </div>

            <div class="bg-[#0F172A]/70 p-4 rounded-lg border border-[#6C63FF]/30">
              <p class="text-sm text-gray-400">Dataset</p>
              <p class="text-lg font-semibold">{dataset}</p>
            </div>

            <div class="bg-[#0F172A]/70 p-4 rounded-lg border border-[#6C63FF]/30">
              <p class="text-sm text-gray-400">Purchased Count</p>
              <p class="text-lg font-semibold">{purchased}</p>
            </div>
          </div>

          <div class="bg-[#0F172A]/70 p-5 rounded-lg border border-[#6C63FF]/30 mb-6">
            <h2 class="text-xl font-semibold text-[#00C9A7] mb-2">
              Description
            </h2>
            <p class="text-gray-300 leading-relaxed">{description}</p>
          </div>

          <div class="text-gray-400 text-sm mb-6 text-center">
            <p>
              Created By:{" "}
              <span class="text-[#00C9A7] font-medium">{createdBy}</span>
            </p>
            <p>
              Created At: <span class="text-[#6C63FF]">{createdAt}</span>
            </p>
          </div>

          <div class="flex flex-wrap justify-center gap-4">
            <button
              onClick={handlepuchase}
              class="bg-[#00C9A7] text-[#0F172A] font-semibold px-6 py-2 rounded-lg hover:shadow-[0_0_15px_rgba(0,201,167,0.5)] transition-all"
            >
              Purchase Model
            </button>

            {user.email === model.createdBy && (
              <div className="flex justify-center items-center gap-4">
                <button onClick={hnadleedit} className="bg-[#6C63FF] text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#7E75FF] transition-all">
                  Edit
                </button>
                <button className="bg-red-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-600 transition-all">
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetils;
