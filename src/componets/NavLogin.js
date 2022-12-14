import React, { Component} from "react";
import '../index.css'
// I used a navbar from bootstrap 
class NavBar extends Component { 
    render() {
      return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark"> 
        <a className="navbar-brand p-3" href="#">Welcome</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
      );
    }
  }
  
  
  export default NavBar;