import React, { Component } from 'react';
import { FaPaw } from "react-icons/fa"

import "./styles.css";
import {Link} from "react-router-dom";
import { PetContext } from "../context";
import Cats from "../pages/Cats";
import Pets from "../pages/Pets";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

export default class SideNav extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
      this.state = {
        typeDog:[],
        typeCat:[]
      }
    
  }
  handleClick = (e) =>{
   this.setState = {
     flag: !this.state.flag
   } 
 }
  render() {
    return (
      <div className="col-md-3 sidenav">
        <h1> <FaPaw />  
        <Link to="/">PawPal</Link>
        </h1>
       <div class="text-element content-element circles-list">
<ol>
<li><Link to ="/choosepets/">Dogs or Cats??</Link>
</li>
<li>
    <Link to="/choosepets/Dogs">Pet Basics </Link><Link to="/choosepets/Cats">Pet Basics </Link>
</li>
<li><Link to ="/">Pet Details</Link></li>
</ol>
</div>

        
<<<<<<< HEAD
=======
=======
export default function SideNav({ sidenav }) {
  // function refreshPage () {
  //   window.location.reload()
  // }
    return (
      <div className="col-md-3 sidenav">
        <h1> <FaPaw /> PawPal</h1>
       <div class="text-element content-element circles-list">
<ol>
<li><Link to ="/choosepets/">Dogs or Cats??</Link>
</li>
<li>
    <Link to="/choosepets/Dogs">Pet Basics </Link>:<Link to="/choosepets/Cats">Pet Basics </Link>
</li>
<li><Link to ="/">Pet Details</Link></li>
</ol>
</div>

        
>>>>>>> f58bb930b1c9b4ed1274e125aaf1cbae7f4e581e
        {/* <a href="#">Contact</a> */}
        
      </div>
    );
  }
}
