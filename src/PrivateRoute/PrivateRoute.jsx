import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  //   const navigate = useNavigate();
  const { userInfo } = useContext(AuthContext);
  if (!userInfo?.email) {
    return <Navigate to="/login" />;
  }
  return <>{children} </>;
};

export default PrivateRoute;
