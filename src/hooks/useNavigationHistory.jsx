// hooks/useNavigationHistory.js
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const useNavigationHistory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(prevHistory => [...prevHistory, location.pathname]);
  }, [location]);

  return { history, navigate };
};

export default useNavigationHistory;
