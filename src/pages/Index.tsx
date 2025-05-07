
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Index = () => {
  // We'll just render the Login component directly on the index page
  // This way we immediately show the login page as requested
  return <Login />;
};

export default Index;
