import { useState } from 'react';
import '../App.css'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) {
      newErrors.name = 'Name is required!';
    }
    if (!form.email) {
      newErrors.email = 'Email is required!';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Invalid email.';
    }
    if (!form.message) {
      newErrors.message = 'Message is required!';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Message sent!');
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors((prev) => ({ ...prev, [name]: `${name} is required` }))
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }
  }

  return (
    <div className='contact'>
      <h1>Contact Me</h1>

      <form className='form' onSubmit={handleFormSubmit}>
        <input
          value={form.name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type='text'
          placeholder='Your Name'
        />
        {errors.name && <div style={{ color: 'red' }}> {errors.name}</div>}
        <input
          value={form.email}
          name='email'
          onChange={handleInputChange}
          onBlur={handleBlur}
          type='text'
          placeholder='Email'
        />
        {errors.email && <div style={{ color: 'red' }}> {errors.email}</div>}
        <input
          value={form.message}
          name='message'
          onChange={handleInputChange}
          onBlur={handleBlur}
          type='text'
          placeholder='Message'
        />
        {errors.message && <div style={{ color: 'red' }}> {errors.message}</div>}
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>

    </div>
  );
}

export default Contact;