import { Navigate } from "react-router-dom";

export const PublicRouting = ({ children, role, isAllowed }) => {
  if (isAllowed) {
    return <Navigate to={role == "admin" ? "/" : "/profile"} replace />;
  } else {
    return children;
  }
};
