import React, { useContext, Fragment  } from 'react';
import { Context } from '../context/context';

const Volunteering = () => {
  const { volunteering } = useContext(Context);

  return (
    <Fragment >
      <div className="page-wrapper">
      <h1 ref={volunteering}>Volunteering</h1>
      <div className="div-container">
        volunteering
      </div>
      </div>
    </Fragment>
  )
}

export default Volunteering;