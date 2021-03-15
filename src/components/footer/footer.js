import React, { Component } from 'react'
import './footer.css'


export default class footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="container">
          <ul className="footer-links">
            <li>Home |</li>
            <li>Terms and Conditions |</li>
            <li>Privacy Policy |</li>
            <li> Collection Statement |</li>
            <li>Help |</li>
            <li>Manage Account</li>
          </ul>
          <p>Copyright &copy; 2016 Netflix streming. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <ul className="social-links">
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className="app-download">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
