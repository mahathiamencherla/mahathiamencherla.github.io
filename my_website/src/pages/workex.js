import React, { useContext, Fragment  } from 'react';
import { Context } from '../context/context';

const Workex = () => {
  const { workex } = useContext(Context);

  return (
    <Fragment >
      <div className="page-wrapper">
      <h1 ref={workex}>Work Experience</h1>
      <div className="div-container">
        My work experience
      </div>
      </div>
    </Fragment>
  )
}

export default Workex;