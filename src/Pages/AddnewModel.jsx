import React from "react";
import { Navigate, useNavigate  } from "react-router";
import { toast } from "react-toastify";

const AddnewModel = () => {
  const navigate = useNavigate();
  const handleAddModel = (e) => {
    
    e.preventDefault();
    // const navigate = Naviga/'/'?te()
     

    const name = e.target.modelname.value;
    const framework = e.target.framework.value;
    const usecase = e.target.usecase.value;
    const dataset = e.target.dataset.value;
    const modelimg = e.target.modelimg.value;
    const description = e.target.description.value;
    const cretoremail = e.target.cretoremail.value;
    const createdAt = new Date();
    const purchased = 0;

    // console.log(
    //   name,
    //   framework,
    //   usecase,
    //   dataset,
    //   modelimg,
    //   description,
    //   cretoremail,
    //   createdAt,
    //   purchased
    // );

    // const newmodel  = {
    //   name: name,
    //   framework: framework,
    //   useCase: usecase,
    //   dataset: dataset,
    //   description: description,
    //   image: modelimg,
    //   createdBy: cretoremail,
    //   createdAt: createdAt,
    //   purchased: purchased,
    // }





    fetch('http://localhost:3000/models', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({

    name: name,
      framework: framework,
      useCase: usecase,
      dataset: dataset,
      description: description,
      image: modelimg,
      createdBy: cretoremail,
      createdAt: createdAt,
      purchased: purchased,
    
  })
})
  .then(res => res.json())
  .then(data => {
    console.log(data)
   if (data.insertedId) {
          toast.success("✅ You added a new model!");
          e.target.reset();
          navigate('/viewsallmodels')
          
        } else {
          toast.error("⚠️ Failed to add model, try again.");
        }
  })
  .catch(error => console.error('Error:', error));


  };

  return (
    <div className="my-12">
      <div className="bg-[#1E293B]/70 backdrop-blur-lg rounded-2xl shadow-lg w-full p-8 text-gray-200 border-2 border-amber-300 shadow-amber-50 mx-5 max-w-fit md:max-w-6/12 md:m-auto">
        <h1 className="text-3xl font-bold text-[#6C63FF] mb-6 text-center">
          Add New Model
        </h1>

        <form onSubmit={handleAddModel} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              placeholder="Model Name"
              name="modelname"
              className="bg-[#0F172A]/70 p-3 rounded-lg border border-[#6C63FF]/30 text-gray-200"
            />
            <input
              placeholder="Framework"
              name="framework"
              className="bg-[#0F172A]/70 p-3 rounded-lg border border-[#6C63FF]/30 text-gray-200"
            />
            <input
              placeholder="Use Case"
              name="usecase"
              className="bg-[#0F172A]/70 p-3 rounded-lg border border-[#6C63FF]/30 text-gray-200"
            />
            <input
              placeholder="Dataset"
              name="dataset"
              className="bg-[#0F172A]/70 p-3 rounded-lg border border-[#6C63FF]/30 text-gray-200"
            />
          </div>

          <input
            placeholder="Model Image URL"
            name="modelimg"
            className="bg-[#0F172A]/70 p-3 w-full rounded-lg border border-[#6C63FF]/30 text-gray-200"
          />

          <textarea
            placeholder="Description"
            name="description"
            rows="4"
            className="bg-[#0F172A]/70 p-3 w-full rounded-lg border border-[#6C63FF]/30 text-gray-200"
          ></textarea>

          <input
            placeholder="Creator Email"
            name="cretoremail"
            className="bg-[#0F172A]/70 p-3 w-full rounded-lg border border-[#6C63FF]/30 text-gray-200"
          />

          <button
            type="submit"
            className="w-full bg-[#00C9A7] text-[#0F172A] font-semibold py-3 rounded-lg hover:shadow-[0_0_15px_rgba(0,201,167,0.5)] transition-all"
          >
            Add Model
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddnewModel;
