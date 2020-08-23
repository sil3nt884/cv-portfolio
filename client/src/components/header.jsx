import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
          <header>
              <div className="row">
                  <div className="top-bar">
                      <a className="menu-toggle" href="/#"><span>Menu</span></a>
                      <div className="logo">
                          <a href="/index.html">Home</a>
                      </div>
                      <nav id="main-nav-wrap">
                          <ul className="main-navigation">
                              <li className="current"><a className="smoothscroll" href="/#intro" >Home</a></li>
                              <li><a className="smoothscroll" href="%PUBLIC_URL%/#about" >About</a></li>
                              <li><a className="smoothscroll" href="%PUBLIC_URL%/#resume" >Resume</a></li>
                              <li><a className="smoothscroll" href="%PUBLIC_URL%/#privacy-policy" >Privacy policy</a></li>
                              <li><a className="smoothscroll" href="%PUBLIC_URL%/#contact" >Contact</a></li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </header>

        )
    }
}
