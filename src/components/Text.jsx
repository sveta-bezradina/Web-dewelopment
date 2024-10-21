import React from 'react';

export const Text = ({ name }) => {
  return <div>{name}</div>;
};

export const Title = ({ text }) => {
  return <div className="MainText">{text}</div>;
};
