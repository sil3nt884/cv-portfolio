import React, { Component } from 'react';
export default class extends Component {
    render() {
      return (<section id="contact">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Contact</h5>
            <h1>I'd Love To Hear From You.</h1>
            <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>
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
        <div className="row contact-info">
          <div className="col-four tab-full">
            <div className="icon">
              <i className="icon-pin" />
            </div>
            <h5>Where to find me</h5>
            <p>
              1600 Amphitheatre Parkway<br />
              Mountain View, CA<br />
              94043 US
            </p>
          </div>
          <div className="col-four tab-full collapse">
            <div className="icon">
              <i className="icon-mail" />
            </div>
            <h5>Email Me At</h5>
            <p>someone@kardswebsite.com<br />
              info@kardswebsite.com
            </p>
          </div>
          <div className="col-four tab-full">
            <div className="icon">
              <i className="icon-phone" />
            </div>
            <h5>Call Me At</h5>
            <p>Phone: (+63) 555 1212<br />
              Mobile: (+63) 555 0100<br />
              Fax: (+63) 555 0101
            </p>
          </div>
        </div> {/* /contact-info */}
      </section>
      )
    }
}
