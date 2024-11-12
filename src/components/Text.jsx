import React from 'react';
import styled from 'styled-components';

export const Text = ({ name }) => {
  return <div>{name}</div>;
};

export const Title = ({ text }) => {
  return <MainText>{text}</MainText>;
};
const MainText = styled.div`
  display: inline-block;
  margin: 5%;
  padding: 0 400px;
  align-items: center;
  font-size: 30pt;
  font-family: "Playwrite CU", cursive;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: auto;
    width: 40%;
    height: 1px;
    background-color: black;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;
