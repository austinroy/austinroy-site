import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
      <div>
      <a  name="services"></a>
          <div className="content-section-a">

              <div className="container">
                  <div className="row">
                      <div className="col-lg-5 col-sm-6">
                          <hr className="section-heading-spacer" />
                          <div className="clearfix"></div>
                          <h2 className="section-heading">Death to the Stock Photo:<br/>Special Thanks</h2>
                          <p className="lead">A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.</p>
                      </div>
                      <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                          <img className="img-responsive" src="img/ipad.png" alt="" />
                      </div>
                  </div>

              </div>
              {/* /.container */}

          </div>
          {/* /.content-section-a */}

          <div className="content-section-b">

              <div className="container">

                  <div className="row">
                      <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                          <hr className="section-heading-spacer" />
                          <div className="clearfix"></div>
                          <h2 className="section-heading">3D Device Mockups<br/>by PSDCovers</h2>
                          <p className="lead">Turn your 2D designs into high quality, 3D product shots in seconds using free Photoshop actions by <a target="_blank" href="http://www.psdcovers.com/">PSDCovers</a>! Visit their website to download some of their awesome, free photoshop actions!</p>
                      </div>
                      <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                          <img className="img-responsive" src="img/dog.png" alt="" />
                      </div>
                  </div>

              </div>
              {/* /.container */}

          </div>
          {/* /.content-section-b */}

          <div className="content-section-a">

              <div className="container">

                  <div className="row">
                      <div className="col-lg-5 col-sm-6">
                          <hr className="section-heading-spacer" />
                          <div className="clearfix"></div>
                          <h2 className="section-heading">Google Web Fonts and<br/>Font Awesome Icons</h2>
                          <p className="lead">This template features the 'Lato' font, part of the <a target="_blank" href="http://www.google.com/fonts">Google Web Font library</a>, as well as <a target="_blank" href="http://fontawesome.io">icons from Font Awesome</a>.</p>
                      </div>
                      <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                          <img className="img-responsive" src="img/phones.png" alt="" />
                      </div>
                  </div>

              </div>
              {/* /.container */}

          </div>
          {/* /.content-section-a */}
      </div>
    );
  }
}

export default Services;
