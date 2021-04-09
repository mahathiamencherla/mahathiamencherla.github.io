import React, { useContext, useRef, useEffect } from 'react';
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
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Home = (props) => {
  const NotmobileView = useMediaQuery("(min-width:768px)")
  const { aboutme, workex, projects, skills, interests, volunteering, contact, setActivePage } = useContext(Context);
  const scrollRef = useRef(null);

  const contactPage = () => {
    setActivePage('contact')
    window.scrollTo({
      top: contact.current.offsetTop,
      behavior: 'smooth'
    })
  };

  const listenScrollEvent = () => {
    const scrollY = window.scrollY; 
    if(scrollY > aboutme.current.offsetTop-150 && scrollY < workex.current.offsetTop-150) {
      setActivePage('aboutme')
    } else if(scrollY > workex.current.offsetTop-150 && scrollY < projects.current.offsetTop-150) {
      setActivePage('workex')
    } else if(scrollY > projects.current.offsetTop-150 && scrollY < skills.current.offsetTop-150) {
      setActivePage('projects')
    } else if(scrollY > skills.current.offsetTop-150 && scrollY < interests.current.offsetTop-150) {
      setActivePage('skills')
    } else if(scrollY > interests.current.offsetTop-150 && scrollY < volunteering.current.offsetTop-150) {
      setActivePage('interests')
    } else if(scrollY > volunteering.current.offsetTop-150 && scrollY < contact.current.offsetTop-150) {
      setActivePage('volunteering')
    } else if(scrollY > contact.current.offsetTop-150) {
      setActivePage('contact')
    }else{
      setActivePage('home')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  })

  return (
    <div ref={scrollRef} onScroll={listenScrollEvent}>
    <div className="header" 
    >
      <div className="inner-header">
        <div className="header-text">
          <h1>I'm Mahathi, a <span className="text-rotator"></span></h1>
          <div className="socials-div">
            <IconButton style={{marginRight: NotmobileView ? '5rem' : '2rem'}}>
              <GitHubIcon style={{width: NotmobileView ? '5rem' : '2rem', height: NotmobileView ? '5rem' : '2rem', color: '#1b2129'}}/>
            </IconButton>
            <IconButton style={{marginRight: NotmobileView ? '5rem' : '2rem'}}>
              <LinkedInIcon style={{width: NotmobileView ? '6rem' : '3rem', height: NotmobileView ? '6rem' : '3rem', color: '#1b2129'}}/>
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
    </div>
  );
}

export default Home;
