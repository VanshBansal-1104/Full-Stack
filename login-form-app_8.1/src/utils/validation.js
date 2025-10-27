export const validateForm = (formData) => {
  const errors = {};
  if (!formData.username || !formData.username.trim()) errors.username = 'Username is required';
  if (!formData.password || !formData.password.trim()) errors.password = 'Password is required';
  else if (formData.password.length < 6) errors.password = 'Password must be at least 6 characters';
  return errors;
};