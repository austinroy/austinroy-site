import React, { Component } from 'react';
// Import Styles
import './css/bootstrap.min.css';
import './css/landing-page.css';
import './font-awesome/css/font-awesome.min.css';
// Import components
import Footer from './Components/Common/footer.js';
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
        <Header />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
