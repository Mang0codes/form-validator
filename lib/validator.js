// lib/validator.js

// Email validator using regex
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Phone number validator (simple international format)
  function validatePhoneNumber(phone) {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  }
  
  // URL validator using regex
  function validateURL(url) {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlRegex.test(url);
  }
  
  // Password validator (must contain at least 8 characters, one letter, and one number)
  function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  }
  
  // Exporting all validators as a module
  module.exports = {
    validateEmail,
    validatePhoneNumber,
    validateURL,
    validatePassword
  };
  