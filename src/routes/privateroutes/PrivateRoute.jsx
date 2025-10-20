import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import Loader from "../../components/common/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate to={`/auth/login`}>{children}</Navigate>;
};

export default PrivateRoute;
