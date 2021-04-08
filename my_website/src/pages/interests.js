import React, { useContext, Fragment  } from 'react';
import { Context } from '../context/context';

const Interests = () => {
  const { interests } = useContext(Context);

  return (
    <Fragment >
      <div className="page-wrapper">
      <h1 ref={interests}>Interests</h1>
      <div className="div-container">
        interests
      </div>
      </div>
    </Fragment>
  )
}

export default Interests;