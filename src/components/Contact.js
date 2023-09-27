import React, { useState }  from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from "react-i18next";

function Contact() {
  //Tranlation
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
  });

  const handleChange = (ev) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };
  /**
 * Handles the form submission event.
 *
 * @param {Event} ev - The form submission event.
 */
  const handleSubmit = (ev) => {
    ev.preventDefault();
    // Perform any further actions like sending the form data to a server
    emailjs.sendForm('service_s7rab4m', 'template_uupyxgu', ev.target, 'YNRASqeRDMcxE8Dlt')
      .then((result) => {
      }, (error) => {
      });
    // Reset the form fields
    setFormData({ name: '', email: '', message: '' });
  };

  const email = "patriciamvbog@gmail.com";
  const linkedin = "https://www.linkedin.com/in/epmontesdeocaverastegui/";
  const github = "https://github.com/patriciabog";

return (
    <div className='contact'>
      <h1 className='contact__title'>{t("contact.title")}</h1>
        <div className='contact__links'>
          <a href={`mailto:${email}`} target='blank' className='contact__links__icon'><i className="fa-regular fa-envelope"></i> Email</a>
          <a href={linkedin} target='blank' className='contact__links__icon'><i className="fa-brands fa-linkedin"></i> Linkedin</a>
          <a href={github} target='blank' className='contact__links__icon'><i className="fa-brands fa-github"></i> GitHub</a>
        </div> 
      <h2 className='form__title'>{t("contact.formTitle")}</h2>
      <form className='form' onSubmit={handleSubmit} >
        <div className="form__group">
          <label className='form__group__label' htmlFor="name">{t("contact.formName")}</label>
            <input
              className='form__group__input'
              type="text"
              id="name"
              name="name"
              placeholder={t("contact.formNamePlaceholder")}
              value={formData.name}
              onChange={handleChange}
              required
            />
            </div>
        <div className="form__group">
          <label className='form__group__label' htmlFor="email">{t("contact.formEmail")}</label>
            <input
              className='form__group__input'
              type="email"
              id="email"
              name="email"
              placeholder={t("contact.formEmailPlaceholder")}
              value={formData.email}
              onChange={handleChange}
              required
            />
        </div>
        <div className="form__group">
          <label className='form__group__label' htmlFor="message">{t("contact.formMessage")}</label>
            <textarea
              className='form__group__text'
              id="message"
              name="message"
              placeholder={t("contact.formMessagePlaceholder")}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
        </div>
         <button className='form__btn' type="submit">{t("contact.btnSubmit")}</button>
      </form>
    </div>
  )
}
export default Contact;