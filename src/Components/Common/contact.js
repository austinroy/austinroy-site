import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center">
                    <h2 className="section-heading">Let us Get In Touch!</h2>
                    <p>Ready to start your next project with me? Thatis great! Give me a call or send me an email and I will get back to you as soon as possible!</p>
                </div>
                <div className="col-lg-4 col-lg-offset-2 text-center">
                    <i className="fa fa-phone fa-3x sr-contact"></i>
                    <p>+254-716-586854</p>
                </div>
                <div className="col-lg-4 text-center">
                    <i className="fa fa-envelope-o fa-3x sr-contact"></i>
                    <p><a href="mailto:royomosh@gmail.com">royomosh@gmail.com</a></p>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Contact;
