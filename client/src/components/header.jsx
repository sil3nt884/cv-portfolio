import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <header>
                <div classname="row">
                    <div classname="top-bar">
                        <a classname="menu-toggle" href="#"><span>Menu</span></a>
                        <div classname="logo">
                            <a href="%PUBLIC_URL%/index.html">KARDS</a>
                        </div>
                        <nav id="main-nav-wrap">
                            <ul classname="main-navigation">
                                <li classname="current"><a classname="smoothscroll" href="#intro" title>Home</a></li>
                                <li><a classname="smoothscroll" href="#about" title>About</a></li>
                                <li><a classname="smoothscroll" href="#resume" title>Resume</a></li>
                                <li><a classname="smoothscroll" href="#portfolio" title>Portfolio</a></li>
                                <li><a classname="smoothscroll" href="#services" title>Services</a></li>
                                <li><a classname="smoothscroll" href="#contact" title>Contact</a></li>
                                <li><a href="%PUBLIC_URL%/styles.html" title>Style Demo</a></li>
                            </ul>
                        </nav>
                    </div>a

                </div>
            </header>
        )
    }
}
