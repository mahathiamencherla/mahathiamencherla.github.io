import React, { useContext, Fragment  } from 'react';

import { Context } from '../context/context';
import '../styles/Contact.css';
import ContactForm from '../components/contactForm';

const Contact = () => {
  const { contact } = useContext(Context);

  return (
    <Fragment >
      <div className="page-wrapper">
      <h1 ref={contact}>Contact</h1>
      <div className="div-container">
        <div className="contact-div">
          <div className="contact-form-div">
            <div className="contact-form">
                <ContactForm/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  )
}

export default Contact;