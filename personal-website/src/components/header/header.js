import React, { Component } from 'react';

import classes from './header.module.css'

class Header extends Component {
    render() {

        return(
            <div className={classes.headerWrapper}>Hello, I'm a Header</div>
        )
    }
}

export default Header;