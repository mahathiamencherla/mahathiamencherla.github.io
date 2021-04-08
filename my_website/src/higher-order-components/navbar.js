import React, { useState, useContext } from 'react';
import { Context } from '../context/context';

import '../styles/HOC styles/navbar.css';

import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, IconButton, 
         Drawer, Divider, List, ListItem, 
         ListItemText, Typography } from '@material-ui/core';


const Navbar = ({ active }) => {
  const { aboutme, projects } = useContext(Context);

  const [ isDrawerOpen, setDrawerOpen ] = useState(false);

    const navs = [
        { key: 'Contact', display: 'Contact', path: '/contact' },
        { key: 'Volunteering', display: 'Volunteering', path: '/volunteering' },
        { key: 'Interests', display: 'Interests', path: '/interests' },
        { key: 'Skills', display: 'Skills', path: '/skills' },
        { key: 'projects', display: 'Projects', path: '/projects' },
        { key: 'Work Experience', display: 'Work Experience', path: '/work-exp' },
        { key: 'aboutme', display: 'About Me', path: '/about' },
        { key: 'Home', display: 'Home', path: '/' },
    ];

    const pageClicked = (key) => {
     if(key === 'aboutme') {
      window.scrollTo({
        top: aboutme.current.offsetTop,
        behavior: 'smooth'
      })
     } else if(key === 'projects') {
      window.scrollTo({
        top: projects.current.offsetTop,
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
                {navs.reverse().map( nav => (
                    <span 
                        key={ nav.key } 
                        className={`nav ${ active === nav.key ? 'active': ''}`}
                        // onClick={() => window.location.href = `${nav.path}`}
                        onClick={() => pageClicked(nav.key)}
                        title={"Coming soon!"}
                    >
                        { nav.display }
                    </span>
                ))}
            </div>            
        </Toolbar>

        <Drawer anchor='left' open={ isDrawerOpen } onClose={ () => setDrawerOpen(false) }>
            <div className='navbar-drawer' role="presentation" onClick={ () => setDrawerOpen(false) } >
                <Divider />
                <List>
                  
                    {navs.map(nav => (
                        <ListItem button key={nav.key}
                        //  onClick={() => window.location.href = `${nav.path}`}
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