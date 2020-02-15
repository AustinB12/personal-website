import React, { Component } from 'react';

import classes from  './intro.module.css'

class Intro extends Component {
    render() {

        return(
            <div className={classes.introWrapper}>
                <div className={classes.introContent}>
                    <div>I'm an intro!</div>
                    <div>I'm an intro!</div>
                    <div>I'm an intro!</div>
                    <div>I'm an intro!</div>
                    <div>I'm an intro!</div>
                </div>
            </div>
        )
    }
}

export default Intro;