import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


// to avoid goin to the account route without login

const ProtectedRoute = ({ children }) => {
    const {user} = UserAuth()

  if (!user) {
    return <Navigate to='/' />;
  } else {
    return children;
  }
};

export default ProtectedRoute;