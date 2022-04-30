import React from 'react';
import { useAuth } from "firebase/auth";
import auth from '../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';


function RequireAuth({ children }) {
  const [user] =useAuthState(auth);
  let location = useLocation();

  if (!users.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;