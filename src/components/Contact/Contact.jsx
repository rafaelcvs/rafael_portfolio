import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { getImageUrl } from "../../utils";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const form = useRef();

  const notify = (message, isSuccess = true) => {
    toast[isSuccess ? 'success' : 'error'](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    // Access form values
    const subject = form.current['user_subject'].value;
    const name = form.current['user_name'].value;
    const phone = form.current['user_phone'].value;
    const email = form.current['user_email'].value;
    const message = form.current['message'].value;

    // Check if any required field is empty
    if (!subject.trim() || !name.trim() || !phone.trim() || !email.trim() || !message.trim()) {
      notify('Please fill in all fields.', false); // Use false to indicate error
      return; // Stop the function if any field is empty
    }

    emailjs
      .sendForm('service_88l04ze', 'template_mt4yu0j', form.current, 'j1aG_V4HMJTtkzSsL')
      .then(
        () => {
          console.log('SUCCESS!');
          notify('Email sent successfully'); // Notify success
          form.current.reset(); // Reset form only on successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          notify('Failed to send the email. Please try again.', false); // Notify failure
        },
      );
  };

  return (
    <div className='contactContainer' id='contact'>
      <h1 className="contactMe">CONTACT ME</h1>
      <h2 className="contactMeSubtitle">Send me a message</h2>
      <form className='formContainer' ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label className='formTitle'>Name</label>
          <input className='formInput' type="text" name="user_name" />
          <label className='formTitle'>Phone</label>
          <input className='formInput' type="text" name="user_phone" />
          <label className='formTitle'>Email</label>
          <input className='formInput' type="email" name="user_email" />
          <img src={getImageUrl("message.png")} alt="logo" class="msgImg" />        
        </div>
        <div className="formMessageGroup">
          <label className='formTitle'>Subject</label>
          <input className='formInput' type="text" name="user_subject" />
          <label className='formTitle'>Message</label>
          <textarea className="formMessage" name="message"></textarea>
          <input className='formButton' type="submit" value="Send" />
        </div>    
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
  
};

export default Contact;
