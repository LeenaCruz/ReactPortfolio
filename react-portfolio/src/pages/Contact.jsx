import {useState} from 'react';
import '../App.css'

const Contact = ()=>  {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
 

  const handleInputChange = (e) => { 
    const {name, value } = e.target;
    setForm((data) => ({
      ...data,
      [name]: value,
    }));
  }
  const handleFormSubmit = (e) => { 
    e.preventDefault();
    alert('Message sent!');
    setForm('');
  }
    return (
      <div className ="container text-center">
        <h1>Contact Me</h1>
        <form className='form' onSubmit={handleFormSubmit}>
          <input
          value= {form.name}
name= "name"
onChange={handleInputChange}
type='text'
placeholder='Your Name'
/>
<input 
value= {form.email}
name='email'
onChange={handleInputChange}
type='text'
placeholder='Email'
/>
<input 
value={form.message}
name='message'
type='text'
placeholder='Message'
/>
<button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
  
  export default Contact;