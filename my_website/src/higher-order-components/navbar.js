import React, { useState, useContext } from 'react';
import { Context } from '../context/context';

import '../styles/HOC styles/navbar.css';

import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, IconButton, 
         Drawer, Divider, List, ListItem, 
         ListItemText, Typography } from '@material-ui/core';


const Navbar = (props) => {
  const { aboutme, workex, projects, skills, interests, volunteering, contact, activePage, setActivePage } = useContext(Context);

  const [ isDrawerOpen, setDrawerOpen ] = useState(false);

    const navs = [
        { key: 'contact', display: 'Contact', path: '/contact' },
        { key: 'volunteering', display: 'Volunteering', path: '/volunteering' },
        { key: 'interests', display: 'Interests', path: '/interests' },
        { key: 'skills', display: 'Skills', path: '/skills' },
        { key: 'projects', display: 'Projects', path: '/projects' },
        { key: 'workex', display: 'Work Experience', path: '/work-exp' },
        { key: 'aboutme', display: 'About Me', path: '/about' },
        { key: 'home', display: 'Home', path: '/' },
    ];

    const pageClicked = (key) => {
        setActivePage(key)
     if(key === 'aboutme') {   
      window.scrollTo({
        top: aboutme.current.offsetTop,
        behavior: 'smooth'
      })
     } else if(key === 'workex') {
      window.scrollTo({
        top: workex.current.offsetTop,
        behavior: 'smooth'
      })
     } else if(key === 'projects') {
        window.scrollTo({
          top: projects.current.offsetTop,
          behavior: 'smooth'
        })
       }else if(key === 'skills') {
        window.scrollTo({
          top: skills.current.offsetTop,
          behavior: 'smooth'
        })
       }else if(key === 'interests') {
        window.scrollTo({
          top: interests.current.offsetTop,
          behavior: 'smooth'
        })
       }else if(key === 'volunteering') {
        window.scrollTo({
          top: volunteering.current.offsetTop,
          behavior: 'smooth'
        })
       } else if(key === 'contact') {
        window.scrollTo({
          top: contact.current.offsetTop,
          behavior: 'smooth'
        })
       } else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
       }
  }

    return (
    <AppBar>
        <Toolbar className='navbar'>
            <IconButton
                edge='start'
                className='nav-menu-button'
                color='inherit'
                onClick={() => setDrawerOpen(true) }
            >
                <MenuIcon style={{width: '4rem', height: '4rem'}}/>
            </IconButton>

            <div className='navs-container'>
                {navs.reverse().map( nav => {
                    return (
                    <span 
                        key={ nav.key } 
                        className={`nav ${ activePage === nav.key ? 'active': ''}`}
                        // onClick={() => window.location.href = `${nav.path}`}
                        onClick={() => pageClicked(nav.key)}
                        title={"Coming soon!"}
                    >
                        { nav.display }
                    </span>
                )})}
            </div>            
        </Toolbar>

        <Drawer anchor='left' open={ isDrawerOpen } onClose={ () => setDrawerOpen(false) }>
            <div className='navbar-drawer' role="presentation" onClick={ () => setDrawerOpen(false) } >
                <Divider />
                <List>
                  
                    {navs.map(nav => (
                        <ListItem button key={nav.key}
                        //  onClick={() => window.location.href = `${nav.path}`}
                        onClick={() => pageClicked(nav.key)}
                        title={"Coming soon!"}
                         >
                            <ListItemText disableTypography
                            primary={<Typography style={{fontSize: '2rem'}}> {nav.display}</Typography>} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    </AppBar>
    )
}

export default Navbar;