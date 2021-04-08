import React, { useContext, Fragment  } from 'react';
import { Context } from '../context/context';

const Projects = () => {
  const { projects } = useContext(Context);

  return (
    <Fragment >
      <div style={{height: '1000px'}}>
      <h1 ref={projects}>Projects</h1>
      </div>
    </Fragment>
  )
}

export default Projects;