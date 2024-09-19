import {useState} from 'react';
import '../App.css'

const Contact = ()=>  {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
 
  const [errors,setErrors] = useState({});

  const validateEmail = (email) => { 
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) { 
      newErrors.name = 'Name is required';
    }
    if (!form.email) {
      newErrors.email = 'Email is required!';
    } else if (!validateEmail(form.email)) { 
      newErrors.email = 'Invalid email';
    }
    if(!form.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  }

  const handleFormSubmit = (e) => { 
    e.preventDefault();
    if(validateForm()) {
    alert('Message sent!');
    setForm({name: '', email: '', message: ''});
    setErrors({});
  }
};


  const handleInputChange = (e) => { 
    const {name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({...prevErrors, [name]: undefined}));
    }
  }
 
    return (
      <div className='contact'>
               <h1>Contact Me</h1>
       
        <form className='form' onSubmit={handleFormSubmit}>
          <input
          value= {form.name}
name= "name"
onChange={handleInputChange}
type='text'
placeholder='Your Name'
/>
{errors.name && <span style={{color: 'red'}}> {errors.name}</span>}
<input 
value= {form.email}
name='email'
onChange={handleInputChange}
type='text'
placeholder='Email'
/>
{errors.email && <span style={{color: 'red'}}> {errors.email}</span>}
<input 
value={form.message}
name='message'
onChange={handleInputChange}
type='text'
placeholder='Message'
/>
{errors.message && <span style={{color: 'red'}}> {errors.message}</span>}
<div>
<button type='submit'>Submit</button>
</div>
        </form>
     
      </div>
    );
  }
  
  export default Contact;