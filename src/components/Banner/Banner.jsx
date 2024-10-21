import React from 'react';
import './banner.css';

export const Banner = ({ title, text, name }) => {
  return (
    <div className="banner">
      <div className="banner_content">
        <h1 className="banner_title">{title}</h1>
        <p>{text}</p>
        <a href="/sale" className="banner-button">{name}</a>
      </div>
    </div>
  );
};
