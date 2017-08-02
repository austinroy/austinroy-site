import React, { Component } from 'react';
import './App.css';
import './assets/css/creative.min.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/less/variables.less';
import './assets/less/mixins.less';
import './assets/less/creative.less';
import './assets/vendor/font-awesome/css/font-awesome.min.css';
import './assets/vendor/magnific-popup/magnific-popup.css';
import About from './Components/Common/about.js';
import Contact from './Components/Common/contact.js';
import Header from './Components/Common/header.js';
import MainNav from './Components/Common/mainNav.js';
import Services from './Components/Common/services.js';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <MainNav />
        <About />
        <Services />
        <Contact />
      </div>
    );
  }
}

export default App;
