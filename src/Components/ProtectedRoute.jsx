import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Context from '../context/Context';

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { islogin, User } = useContext(Context);
  
  if (!islogin) {
    // Redirect to login if not logged in
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && (!User || User.role !== requiredRole)) {
    // Redirect to home if user doesn't have required role
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
