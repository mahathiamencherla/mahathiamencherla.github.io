import React, { useContext, Fragment  } from 'react';
import { Context } from '../context/context';

const Workex = () => {
  const { workex } = useContext(Context);

  return (
    <Fragment >
      <div style={{height: '1000px'}}>
      <h1 ref={workex}>Workex</h1>
      </div>
    </Fragment>
  )
}

export default Workex;