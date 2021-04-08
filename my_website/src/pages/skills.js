import React, { useContext, Fragment  } from 'react';
import { Context } from '../context/context';

const Skills = () => {
  const { skills } = useContext(Context);

  return (
    <Fragment >
      <div style={{height: '1000px'}}>
      <h1 ref={skills}>Skills</h1>
      </div>
    </Fragment>
  )
}

export default Skills;