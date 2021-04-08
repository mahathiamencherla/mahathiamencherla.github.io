import React, { useContext, Fragment } from 'react';
import { Context } from '../context/context';

import '../styles/About.css';

const AboutMe = () => {
  const { aboutme } = useContext(Context);

  return (
    <Fragment >
      <div className="page-wrapper">
      <h1 ref={aboutme}>About Me</h1>
      <div className="div-container">
        Who I Am
        Where i'm from
        what I want
      </div>
      </div>
    </Fragment>
  )
}

export default AboutMe;