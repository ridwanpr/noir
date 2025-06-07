import { Navigate, useLocation } from "react-router";
import useUserStore from "../../store/userStore";

const GuestRoute = ({ children }) => {
  const { user, token } = useUserStore();
  const location = useLocation();

  if (user && token) {
    return <Navigate to="/" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default GuestRoute;
