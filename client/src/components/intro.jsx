import React, { Component } from 'react';
export default class App extends Component {
  render() {
    return (
      <section id="intro">
        <div className="intro-overlay" />
        <div className="intro-content">
          <div className="row">
            <div className="col-twelve">
              <h5>Hello, World.</h5>
              <h1>I'm Ricky Luu.</h1>
              <p className="intro-position">
                <span>Node JS Developer</span>
                <span>Application Support Engineer</span>
              </p>
              <a className="button stroke smoothscroll" href="/#about" >More About Me</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
