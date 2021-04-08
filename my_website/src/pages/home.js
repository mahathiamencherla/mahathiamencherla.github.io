import React, { Fragment, useContext } from 'react';
import { IconButton } from '@material-ui/core';
import { Context } from '../context/context';

import Waves from '../components/waves';
import AboutMe from './about';
import Workex from './workex';
import Projects from './projects';
import Skills from './skills';
import Interests from './interests';
import Volunteering from './volunteering';
import Contact from './contact';

import '../styles/Home.css';

import Orca from '../orca.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Home = (props) => {
  const { contact, setActivePage } = useContext(Context);

  const contactPage = () => {
    setActivePage('contact')
    window.scrollTo({
      top: contact.current.offsetTop,
      behavior: 'smooth'
    })
  };

  return (
    <Fragment>
    <div className="header">
      <div className="inner-header">
        <div className="header-text">
          <h1>I'm Mahathi, a <span className="text-rotator"></span></h1>
          <div className="socials-div">
            <IconButton style={{marginRight: '5rem'}}>
              <GitHubIcon style={{width: '5rem', height: '5rem', color: '#1b2129'}}/>
            </IconButton>
            <IconButton style={{marginRight: '5rem'}}>
              <LinkedInIcon style={{width: '6rem', height: '6rem', color: '#1b2129'}}/>
            </IconButton>
            <button className="contact-button" onClick={contactPage}>Contact</button>
          </div>
        </div>
        <div className="header-img">
          <img src={Orca} alt="orca" width="300" height="300"></img>
        </div>
      </div>
    <Waves/> 
    </div>
    <div className="gap" ></div>
    <AboutMe/>
    <Workex/>
    <Projects/>
    <Skills/>
    <Interests/>
    <Volunteering/>
    <Contact/>
    </Fragment>
  );
}

export default Home;
