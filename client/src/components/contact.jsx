import React, { Component } from 'react';
export default class extends Component {
    render() {
      return (<section id="contact">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Contact</h5>
            <h1>I'd Love To Hear From You.</h1>
            <p className="lead">To contact me fill this email form and will reply to you as soon as possible</p>
          </div>
        </div> {/* /section-intro */}
        <div className="row contact-form">
          <div className="col-twelve">
            {/* form */}
            <form name="contactForm" id="contactForm" >
              <fieldset>
                <div className="form-field">
                  <input name="contactName" type="text" id="contactName" placeholder="Name"  />
                </div>
                <div className="form-field">
                  <input name="contactEmail" type="email" id="contactEmail" placeholder="Email"  />
                </div>
                <div className="form-field">
                  <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject"  />
                </div>
                <div className="form-field">
                  <textarea name="contactMessage" id="contactMessage" placeholder="message"  />
                </div>
                <div className="form-field">
                  <button className="submitform">Submit</button>
                  <div id="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1" />
                      <div className="bounce2" />
                      <div className="bounce3" />
                    </div>
                  </div>
                </div>
              </fieldset>
            </form> {/* Form End */}
            {/* contact-warning */}
            <div id="message-warning">
            </div>
            {/* contact-success */}
            <div id="message-success">
              <i className="fa fa-check" />Your message was sent, thank you!<br />
            </div>
          </div> {/* /col-twelve */}
        </div> {/* /contact-form */}
      </section>
      )
    }
}
