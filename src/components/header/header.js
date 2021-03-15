import React, { Component } from 'react'
import './header.css'

export default class header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="container">
          <h1><a href="/" >Netflix</a></h1>
          <ul className="right-section">
            <li>Login</li>
            <li className="button">Start your free trail</li>
          </ul>
        </div>
      </div>
    )
  }
}
