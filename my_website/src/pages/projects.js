import React, { useContext, Fragment  } from 'react';
import { Context } from '../context/context';

const Projects = () => {
  const { projects } = useContext(Context);

  return (
    <Fragment >
      <h1 ref={projects}>Projects</h1>
    </Fragment>
  )
}

export default Projects;