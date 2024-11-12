import React from 'react';
import useNavigationHistory from '../../hooks/useNavigationHistory';

const Debug = () => {
  const { history } = useNavigationHistory();

  return (
    <div className="debug">
      <h4>Navigation History:</h4>
      <ul>
        {history.map((path, index) => (
          <li key={index}>{path}</li>
        ))}
      </ul>
    </div>
  );
};

export default Debug;
