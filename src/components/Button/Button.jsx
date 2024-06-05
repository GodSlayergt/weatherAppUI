import React from 'react';
import './Buttton.css';

export const Button = ({ children, onClick }) => (
  <button className="stylish-button" onClick={onClick}>
    {children}
  </button>
);

