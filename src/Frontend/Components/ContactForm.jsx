// src/ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
 

const ContactForm = () => {
  
const onChange = () => {


};
const notify = () => toast("Email sent successfully!");

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

  const serviceId = 'service_1ab1vfl';
  const templateId = 'template_u4f1im2';
  const publicKey = 'uo5jzZ8z_im3yAOGc';

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: 'IBC',
    subject: subject,
    message: message,
    mobile: mobile,

  };
     emailjs.send(serviceId, templateId, templateParams, publicKey)
     .then((response) => {
        console.log('Email sent successfully', response);
        setName('');
        setEmail('');
        setSubject('');
        setMobile('');
        setMessage('');
     })

.catch((error) => {

  console.error('Error sending email', error);
});

 

} 
  return (
    
    <div className="container">
      <form className="emailForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" placeholder="Enter Name" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" placeholder="Enter Email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input type="text" placeholder="Enter Subject/Service Looking for" className="form-control" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input   type="tel" placeholder="Enter Your Contact Number" className="form-control" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />


        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea cols="30" rows="5" placeholder="Enter Your Message" className="form-control" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div>
        <div className="mb-3">
        <ReCAPTCHA sitekey="6LeFuosUAAAAAMHGuHM25M14zdNbTz83ADNMG9AE"  onChange={onChange} /> 

        </div>
        <button type="submit" onClick={notify} className="btn btn-primary">Submit</button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default ContactForm;
