import React from 'react';
import './product.css'; 

const CurrencySwitcher = ({ setCurrency }) => {
  return (
    <div className="radio-input">
      <label>
        <input value="value-1" name="value-radio" id="value-1" onClick={() => setCurrency('UAH')} type="radio" />
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 30 20">
            <rect width="30" height="10" fill="#005EB8" />
            <rect width="30" height="10" y="10" fill="#FFD100" />
          </svg>
      </span>
      </label>
      <label>
        <input value="value-2" name="value-radio" id="value-2" onClick={() => setCurrency('USD')} type="radio" />
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 640 480">
            <g fill-rule="evenodd">
              <path fill="#B22234" d="M0 0h640v480H0z"/>
              <path fill="#FFFFFF" d="M0 36h640v36H0zm0 72h640v36H0zm0 72h640v36H0zm0 72h640v36H0zm0 72h640v36H0zm0 72h640v36H0zm0 72h640v36H0z"/>
              <path fill="#B22234" d="M0 0h640v36H0zm0 72h640v36H0zm0 72h640v36H0zm0 72h640v36H0zm0 72h640v36H0zm0 72h640v36H0z"/>
              <path fill="#3C3B6E" d="M0 0h240v260H0z"/>
              <path fill="#FFFFFF" d="M0 0h24v16H0zm0 36h24v16H0zm0 36h24v16H0zm0 36h24v16H0zm0 36h24v16H0zm0 36h24v16H0zm0 36h24v16H0zm0 36h24v16H0zM0 72h24v16H0zm0 36h24v16H0zM0 108h24v16H0zM0 144h24v16H0zM0 180h24v16H0zM0 216h24v16H0zM0 252h24v16H0zM0 288h24v16H0z"/>
            </g>
          </svg>
        </span>
      </label>
      <span class="selection"></span>
    </div>
  );
};

export default CurrencySwitcher;
