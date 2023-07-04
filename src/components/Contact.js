import React, { useState }  from 'react';
import emailjs from 'emailjs-com';
import DownloadButton from './DownloadButton';

function Contact() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (ev) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // Perform any further actions like sending the form data to a server

    emailjs.sendForm('service_s7rab4m', 'template_uupyxgu', ev.target, 'YNRASqeRDMcxE8Dlt')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    // Reset the form fields
    setFormData({ name: '', email: '', message: '' });
  };
return (
    <div className='contact'>
        <h1 className='contact__title'>Contact Me by</h1>
        <div className='contact__links'>
            <a href="mailto:patriciamvbog@gmail.com" 
            target='blank' 
            className='contact__links__icon'> 
            <i class="fa-regular fa-envelope"></i> Email</a>
            <a href="https://www.linkedin.com/in/epmontesdeocaverastegui/" target='blank' 
            className='contact__links__icon'> 
            <i class="fa-brands fa-linkedin" ></i> Linkedin </a>
            <a href="https://github.com/patriciabog" 
            target='blank' className='contact__links__icon'>
            <i className="fa-brands fa-github"></i> GitHub </a>
        </div>
        <DownloadButton />  
        <h2 className='form__title'>Contact form</h2>
        <form className='form' onSubmit={handleSubmit} >
            <div className="form__group">
              <label className='form__group__label' htmlFor="name">Name:</label>
              <input
                className='form__group__input'
                type="text"
                id="name"
                name="name"
                placeholder='Your name..'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__group">
              <label  className='form__group__label' htmlFor="email">Email:</label>
              <input
                className='form__group__input'
                type="email"
                id="email"
                name="email"
                placeholder='Your email@example.com'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__group">
              <label className='form__group__label' htmlFor="message">Message:</label>
              <textarea
                className='form__group__text'
                id="message"
                name="message"
                placeholder='Write something..'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className='form__btn' type="submit">Submit</button>
        </form>
    </div>
  )
}
export default Contact;