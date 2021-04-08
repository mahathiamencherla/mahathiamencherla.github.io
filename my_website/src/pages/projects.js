import React, { useContext, Fragment  } from 'react';
import { Context } from '../context/context';

const Projects = () => {
  const { projects } = useContext(Context);

  return (
    <Fragment >
      <div className="page-wrapper">
      <h1 ref={projects}>Projects</h1>
      <div className="div-container">
        Personal projects
      </div>
      </div>
    </Fragment>
  )
}

export default Projects;