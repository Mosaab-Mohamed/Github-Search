import { Navigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

function PrivateRoute({ children }) {
  const { user, isAuthenticated } = useAuth0();
  return user && isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
