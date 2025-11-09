import React, { useContext } from 'react';
import Authcontext from '../ContextAuth/Authcontext';
import { Navigate } from 'react-router';
import LoadingSpinner from '../Components/LoadingSpinner';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
