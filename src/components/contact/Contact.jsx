import React from 'react'
import './contact.css'
import {MdMarkEmailRead} from 'react-icons/md'
import {GrLinkedin} from 'react-icons/gr'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ywg3ljv', 'template_vd6fpe8', form.current, 'm8WFnC7jkSVqE840R')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
        <article className='contact__option'>
            <MdMarkEmailRead className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>muskansingh9421@gmail.com</h5>
            <a href='mailto:muskansingh9421@gmail.com' target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <GrLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>muskansingh9421</h5>
            <a href='https://www.linkedin.com/in/muskan-singh-b51a03205/' target='_blank'>Send a message</a>
          </article>
        </div>

        {/*       End of contact options      */}
        
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
            <input type='email' name='email' placeholder='Your Email' required/>
              <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact