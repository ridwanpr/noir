import { Navigate, useLocation } from "react-router";
import useUserStore from "../../store/userStore";

const ProtectedRoute = ({ children }) => {
  const { user, token } = useUserStore();
  const location = useLocation();

  if (!user || !token) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default ProtectedRoute;
