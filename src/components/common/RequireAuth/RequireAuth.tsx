import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IRequireAuthProps {
  // eslint-disable-next-line no-undef
  children: JSX.Element;
}

const RequireAuth = ({ children }: IRequireAuthProps) => {
  const location = useLocation();

  if (!localStorage.getItem('email')) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
