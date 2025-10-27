import React from 'react';
import './Button.css';

const Button = ({ children, onClick, type = 'button', fullWidth = false, disabled = false }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`btn ${fullWidth ? 'btn-full' : ''}`}>
      {children}
    </button>
  );
};

export default Button;