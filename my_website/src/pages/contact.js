import React, { useContext, Fragment  } from 'react';
import { Context } from '../context/context';

const Contact = () => {
  const { contact } = useContext(Context);

  return (
    <Fragment >
      <div className="page-wrapper">
      <h1 ref={contact}>Contact</h1>
      <div className="div-container">
        CONTACT ME
      </div>
      </div>
    </Fragment>
  )
}

export default Contact;