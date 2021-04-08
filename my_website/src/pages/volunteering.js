import React, { useContext, Fragment  } from 'react';
import { Context } from '../context/context';

const Volunteering = () => {
  const { volunteering } = useContext(Context);

  return (
    <Fragment >
      <div style={{height: '1000px'}}>
      <h1 ref={volunteering}>Volunteering</h1>
      </div>
    </Fragment>
  )
}

export default Volunteering;