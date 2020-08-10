import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            
<NavContainer className="navbar navbar-expand-lg navbar-light mx-auto bg-warning ">
  <Link  className="navbar-brand  text-white ml-2 text-uppercase " to="/">tp react</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link text-white text-uppercase ml-5" to="/">Home &nbsp; <i className="fas fa-vihara"></i> <span className="sr-only">(current)</span> &nbsp;</Link>
      </li>

      <li className="nav-item ">
        <Link className="nav-link text-white text-uppercase ml-5" to="/mock">mock</Link>
      </li>
    </ul>
   
  </div>



</NavContainer> 


        )
    }
}
const NavContainer=styled.div`


padding: 17px;

width: 50%;
border-radius: 3rem;

background-color: #5a92a299 !important;

.navbar-brand {
    font-size:20px;
    
}
 .navbar-brand {
  padding-left: 67px;
  font-size: 20px;
}

`