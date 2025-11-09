import React from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../Components/ModelCard";

const ViewsAllModels = () => {
  //  fetch the app models here
  const models = useLoaderData();
  // console.log(models);

  return (
    <div className="  bg-gradient-to-br from-[#001D6E] via-[#000814] to-[#000814]">

       <h4 className='text-center text-3xl font-bold py-16'>Available Models</h4>

      <div className="max-w-10/12 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-5  pb-12">
        {models.map((model) => (
          <ModelCard model={model} key={model._id}></ModelCard>
        ))}
      </div>

    </div>
  );
};

export default ViewsAllModels;
