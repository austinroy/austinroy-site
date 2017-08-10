import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
      {/* Header */}
      <div className="intro-header">
          <div className="container">

              <div className="row">
                  <div className="col-lg-12">
                      <div className="intro-message">
                          <h1>Austin Roy</h1>
                          <h3>Welcome To My Site</h3>
                          <hr className="intro-divider" />
                          <ul className="list-inline intro-social-buttons">
                              <li>
                                  <a href="https://twitter.com/AustinRoy007" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                              </li>
                              <li>
                                  <a href="https://github.com/austinroy" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                              </li>
                              <li>
                                  <a href="https://www.linkedin.com/in/austin-roy-omondi-32294770/" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

          </div>
          {/* /.container */}

      </div>
      {/* /.intro-header */}
      </div>
    );
  }
}

export default Header;
