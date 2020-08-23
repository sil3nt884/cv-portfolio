import React, { Component } from 'react'

export default class about extends Component {
  render () {
    return (<section id="privacy-policy">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>privacy policy</h5>
        </div>
      </div>
      <div className="privacy-content">
      <div className="row portfolio-content">
        <div className="col-twelve">
          <p class="lead">
            I(Ricky Luu)  an individual is not a business and i am not selling any goods,this website is my personal
            blog and it is being used to demonstrate my skills.
            <br/>
            This website is tracking your IP Address, A part of your digital personal data
            The IP address will be used to keep track of your visit to this page
            All data stored on this website is used to for analytics and demonstration purposes only and can be requested to
            be deleted.
            <br/>
            <strong>How to delete your data</strong>
            <br/>
            Please email : <a href="mailto:rickyluu247@gmail.com">rickyluu247@gmail.com</a>
          </p>
          </div>
        </div>
      </div>
    </section>)
  }
}
