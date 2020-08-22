import React, { Component } from 'react';
export default class about extends Component {
  render() {
   return  (<section id="about">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>About</h5>
          <h1>Let me introduce myself.</h1>
          <div className="intro-info">
            <img src="images/profile-pic.jpg" alt="profile"/>
            <p className="lead">Lorem ipsum Exercitation culpa qui dolor consequat exercitation fugiat laborum ex ea
              eiusmod ad do aliqua occaecat nisi ad irure sunt id pariatur Duis laboris amet exercitation veniam labore
              consectetur ea id quis eiusmod.</p>
          </div>
        </div>
      </div>
      {/* /section-intro */}
      <div className="row about-content">
        <div className="col-six tab-full">
          <h3>Profile</h3>
          <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur
            nisi commodo ea magna pariatur nisi cillum.</p>
          <ul className="info-list">
            <li>
              <strong>Fullname:</strong>
              <span>Juan Dela Cruz</span>
            </li>
            <li>
              <strong>Birth Date:</strong>
              <span>September 28, 1987</span>
            </li>
            <li>
              <strong>Job:</strong>
              <span>Freelancer, Frontend Developer</span>
            </li>
            <li>
              <strong>Website:</strong>
              <span>www.kardswebsite.com</span>
            </li>
            <li>
              <strong>Email:</strong>
              <span>me@kardswebsite.com</span>
            </li>
          </ul>
          {/* /info-list */}
        </div>
        <div className="col-six tab-full">
          <h3>Skills</h3>
          <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur
            nisi commodo ea magna pariatur nisi cillum.</p>
          <ul className="skill-bars">
            <li>
              <div className="progress percent90"><span>90%</span></div>
              <strong>HTML5</strong>
            </li>
            <li>
              <div className="progress percent85"><span>85%</span></div>
              <strong>CSS3</strong>
            </li>
            <li>
              <div className="progress percent70"><span>70%</span></div>
              <strong>JQuery</strong>
            </li>
            <li>
              <div className="progress percent95"><span>95%</span></div>
              <strong>PHP</strong>
            </li>
            <li>
              <div className="progress percent75"><span>75%</span></div>
              <strong>Wordpress</strong>
            </li>
          </ul>
          {/* /skill-bars */}
        </div>
      </div>
       <img class="banner-img" src="/images/banner.jpg"></img>
    </section>)

  }
}
