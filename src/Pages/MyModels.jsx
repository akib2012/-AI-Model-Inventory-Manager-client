import React, { useContext, useEffect } from 'react';
import Authcontext from '../ContextAuth/Authcontext';
import LoadingSpinner from '../Components/LoadingSpinner';

const MyModels = () => {
  const { user, loading } = useContext(Authcontext);

  if (loading) {
    return <LoadingSpinner />;
  }

  useEffect(() => {
  fetch(`http://localhost:3000/models?email=perbejbhuiyan@gmail.com`)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error('Error fetching models:', err));

}, [user?.email]);


  return (
    <div className="text-white p-6">
      <h3 className="text-xl font-semibold">This is My Models page</h3>
    </div>
  );
};

export default MyModels;
