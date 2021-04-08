import React, { useContext, Fragment } from 'react';
import { Context } from '../context/context';

const AboutMe = () => {
  const { aboutme } = useContext(Context);

  return (
    <Fragment >
      <div style={{height: '1000px'}}>
      <h1 ref={aboutme}>About Me</h1>
      </div>
    </Fragment>
  )
}

export default AboutMe;