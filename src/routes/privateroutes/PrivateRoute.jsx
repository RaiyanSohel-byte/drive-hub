import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import Loader from "../../components/common/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate state={location} to={`/auth/login`}>
      {children}
    </Navigate>
  );
};

export default PrivateRoute;
