import React, { useContext, Fragment  } from 'react';
import { Context } from '../context/context';

const Skills = () => {
  const { skills } = useContext(Context);

  return (
    <Fragment >
      <div className="page-wrapper">
      <h1 ref={skills}>Skills</h1>
      <div className="div-container">
        skills
      </div>
      </div>
    </Fragment>
  )
}

export default Skills;