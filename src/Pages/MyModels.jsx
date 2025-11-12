import React, { useContext, useEffect, useState } from "react";
import Authcontext from "../ContextAuth/Authcontext";
import LoadingSpinner from "../Components/LoadingSpinner";
import { toast } from "react-toastify";

const MyModels = () => {
  const { user, loading, setLoading } = useContext(Authcontext);
  const [mymodel, setMymodel] = useState([]);

  //   console.log(user?.email);

  useEffect(() => {
    fetch(`http://localhost:3000/my-models?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // toast.success("submit your model")
        setMymodel(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching models:", err));
  }, [user?.email, setLoading, setMymodel, user?.accessToken]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-10/12 m-auto rounded-2xl my-4">
      {mymodel.length === 0 ? (
        <div>
          <h3 className="text-center text-2xl text-white">No model found 😢</h3>
        </div>
      ) : (
        mymodel.map((model) => (
          <div key={model._id} className="my-5">
            <div className="rounded-2xl flex items-center border-b border-gray-700 p-3 bg-gray-900 text-gray-100">
              <div className="mt-5 w-16 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="flex-1 font-medium">{model.name}</div>
              <div className="flex-1 text-white">{model.framework}</div>
              <div className="flex-1 text-white">{model.useCase}</div>
              <div className="flex-1 text-white">{model.createdBy}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyModels;
