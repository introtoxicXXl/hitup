// import React from 'react';
// import auth from '../../firebase.init';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';


// function RequireAuth({ children }) {
//   const [user] = useAuthState(auth);
//   const location = useLocation();

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
//   return children;
// }

// export default RequireAuth;