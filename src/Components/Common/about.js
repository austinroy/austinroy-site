import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
      <a  name="about"></a>
          <div className="content-section-a">

              <div className="container">
                  <div className="row">
                      <div className="col-lg-5 col-sm-6">
                          <hr className="section-heading-spacer" />
                          <div className="clearfix"></div>
                          <h2 className="section-heading">Who is am I?</h2>
                          <p className="lead">A full stack Python and JS Developer at Andela and general lover of life. A gamer with an eye for art and an ear for music.</p>
                      </div>
                      <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                          <img className="img-responsive" src="img/anonymous.jpg" alt="" />
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
                          <h2 className="section-heading">My Skills</h2>
                          <p className="lead">I currently specialize in web development with Python and Javascript. I have experience with various frameworks more so Flask and Django for Python and MEAN stack and ReactJS for Javascript.</p>
                      </div>
                      <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                           <img  className="img-responsive" src="img/mac-coffee.jpg" alt="" />
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
                          <h2 className="section-heading">Contact me via <br/>Email or Cell</h2>
                          <p className="lead">
                          Reach out to me:<br/><br/>
                          <span className="btn btn-default btn-lg"><i className="fa fa-phone fa-fw"></i> <span className="network-name">+254-716-586854</span></span>
                          <br/><br/>
                          <a href="mailto:royomosh@gmail.com" className="btn btn-default btn-lg"><i className="fa fa-envelope fa-fw"></i> <span className="network-name">royomosh@gmail.com</span></a>
                          </p>
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

export default About;
