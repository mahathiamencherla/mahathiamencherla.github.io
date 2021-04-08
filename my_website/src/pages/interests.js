import React, { useContext, Fragment  } from 'react';
import { Context } from '../context/context';

const Interests = () => {
  const { interests } = useContext(Context);

  return (
    <Fragment >
      <div style={{height: '1000px'}}>
      <h1 ref={interests}>Interests</h1>
      </div>
    </Fragment>
  )
}

export default Interests;