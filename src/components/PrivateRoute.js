import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  return isAdmin ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
