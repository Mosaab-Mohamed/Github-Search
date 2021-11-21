import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";

function AuthWrapper({ children }) {
  const { isLoading } = useAuth0();
  if (isLoading) return <Loading />;
  else return children;
}

export default AuthWrapper;
