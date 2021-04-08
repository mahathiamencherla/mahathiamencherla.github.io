import React, { useContext, Fragment } from 'react';
import { Context } from '../context/context';

const AboutMe = () => {
  const { aboutme } = useContext(Context);

  return (
    <Fragment >
      <h1 ref={aboutme}>About Me</h1>
    </Fragment>
  )
}

export default AboutMe;