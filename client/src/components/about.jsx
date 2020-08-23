import React, { Component } from 'react';
export default class about extends Component {
  render() {
   return  (<section id="about">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>About</h5>
          <h1>Let me introduce myself.</h1>
          <div className="intro-info">
            <img src="images/me.jpg" alt="profile"/>
            <p className="lead">A Developer that has come from a front facing Application support role, with the curiosity to learn new technologies. As well as knowledge from two vastly different roles from deploying servers to working with Nodejs. And has demonstrated understanding of kubernetes, load balancers ,Linux Systems, SQL, Java, and Javascript and also holds a Bsc in Computer Science.</p>
          </div>
        </div>
      </div>
      {/* /section-intro */}
      <div className="row about-content">
        <div className="col-six tab-full">
          <h3>Profile</h3>
          <ul className="info-list">
            <li>
              <strong>Fullname:</strong>
              <span>Ricky Luu</span>
            </li>
            <li>
              <strong>Birth Date:</strong>
              <span>August 16 1991</span>
            </li>
            <li>
              <strong>Job:</strong>
              <span>Node JS Developer</span>
            </li>
            <li>
              <strong>Email:</strong>
              <span>rickyluu247@gmail.com</span>
            </li>
          </ul>
          {/* /info-list */}
        </div>
        <div className="col-six tab-full">
          <h3>Skills</h3>
          <ul className="skill-bars">
            <li>
              <div className="progress percent95"><span>95%</span></div>
              <strong>JavaScript</strong>
            </li>
            <li>
              <div className="progress percent95"><span>95%</span></div>
              <strong>Node JS</strong>
            </li>
            <li>
              <div className="progress percent70"><span>70%</span></div>
              <strong>Java</strong>
            </li>
            <li>
              <div className="progress percent70"><span>70%</span></div>
              <strong>SQL</strong>
            </li>
            <li>
              <div className="progress percent50"><span>50%</span></div>
              <strong>Linux</strong>
            </li>
          </ul>
          {/* /skill-bars */}
        </div>
      </div>
    </section>)

  }
}
