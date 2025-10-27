import React from 'react';
import './Input.css';

const Input = ({ label, type = 'text', name, value, onChange, placeholder, error }) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={name} className="input-label">{label}</label>}
      <input type={type} id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} className={`input-field ${error ? 'input-error' : ''}`} />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;