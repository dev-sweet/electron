import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { isLoading } = useContext(AuthContext);
  const { userInfo } = useContext(AuthContext);
  if (isLoading) {
    return <Loader />;
  }
  if (!userInfo?.email) {
    return <Navigate to="/login" />;
  }
  return <>{children} </>;
};

export default PrivateRoute;
