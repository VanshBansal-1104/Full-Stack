import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { validateForm } from '../../utils/validation';
import { VALIDATION_MESSAGES } from '../../constants/validationMessages';
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    setSubmitSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitSuccess(false);
      return;
    }
    console.log('=== Login Attempt ===');
    console.log('Username:', formData.username);
    console.log('Password:', formData.password);
    console.log('Timestamp:', new Date().toISOString());
    console.log('====================');
    setErrors({});
    setSubmitSuccess(true);
  };

  return (
    <div className="login-form-container">
      <div className="login-form-card">
        <h2 className="login-form-title">Welcome Back</h2>
        <p className="login-form-subtitle">Please enter your credentials</p>
        <div className="login-form">
          <Input label="Username" type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Enter your username" error={errors.username} />
          <Input label="Password" type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Enter your password" error={errors.password} />
          {submitSuccess && <div className="success-message">{VALIDATION_MESSAGES.SUCCESS}</div>}
          <Button onClick={handleSubmit} fullWidth>Log In</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;