import React, { useContext, Fragment  } from 'react';
import { Context } from '../context/context';

const Contact = () => {
  const { contact } = useContext(Context);

  return (
    <Fragment >
      <div style={{height: '1000px'}}>
      <h1 ref={contact}>Contact</h1>
      </div>
    </Fragment>
  )
}

export default Contact;