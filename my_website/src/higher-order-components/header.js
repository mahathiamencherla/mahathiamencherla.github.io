import React, { Fragment } from 'react';
import Navbar from './navbar';

const Header = ( props ) => {

    return (
    <Fragment>
        
        <Navbar active={ props.currentPage } getRef={props.getRef}></Navbar>
        <div style={{minHeight: '70vh', display: 'block'}}>
            { props.children }
        </div>        
    </Fragment>
    )
};

export default Header;