import React, { Component } from 'react';
export default class extends Component {
  render () {
    return (<section id="portfolio">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Portfolio</h5>
          <h1>Check Out Some of My Works.</h1>
          <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi
            aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>
        </div>
      </div>
      {/* /section-intro*/}
      <div className="row portfolio-content">
        <div className="col-twelve">
          <div id="folio-wrapper" className="block-1-2 block-mob-full stack">

            <div className="bgrid folio-item">
              <div className="item-wrap">

              </div>
            </div>

          </div>
          {/* /portfolio-wrapper */}
        </div>
        {/* /twelve */}
      </div>
      {/* /portfolio-content */}
    </section>)

  }
}
