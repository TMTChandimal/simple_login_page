import { Outlet, Navigate } from "react-router-dom";   

const ProtectedRoutes = () => {
  const isAuthenticated = !!localStorage.getItem("authToken");
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;