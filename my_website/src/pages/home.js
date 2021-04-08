import React, { Fragment } from 'react';

import Waves from '../components/waves';
import AboutMe from './about';
import Projects from './projects';
import '../styles/Home.css';

import Orca from '../orca.png';


const Home = (props) => {

  return (
    <Fragment>
    <div className="header">
      <div className="inner-header">
        <div className="header-text">
          <h1>I'm Mahathi, a <span className="text-rotator"></span></h1>
          <h3>This is my portfolio. Enjoy!</h3>
        </div>
        <div className="header-img">
          <img src={Orca} alt="orca" width="300" height="300"></img>
        </div>
      </div>
    <Waves/> 
    </div>
    <div style={{height: '22vh'}}></div>
    <AboutMe/>
    <Projects/>
    </Fragment>
  );
}

export default Home;
