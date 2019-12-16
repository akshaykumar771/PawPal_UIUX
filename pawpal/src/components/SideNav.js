import React, { Component } from 'react';
import { FaPaw } from "react-icons/fa"
import Popup from "reactjs-popup";
import MyForm from "./Form";
import "./styles.css";
import {Link} from "react-router-dom";
import { PetContext } from "../context";
import Cats from "../pages/Cats";
import Pets from "../pages/Pets";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

<<<<<<< HEAD
export default class SideNav extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
      this.state = {
        flag : false
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
        <h1> <FaPaw /> PawPal</h1>
       <div class="text-element content-element circles-list">
<ol>
<li><Link to ="/choosepets/">Dogs or Cats??</Link>
</li>
<li>
  {this.state.flag?<Link to="/choosepets/Dogs">Pet Basics </Link>: <Link to="/choosepets/Cats">Pet Basics </Link>}

  </li>
<li><Link to ="/">Pet Details</Link></li>
</ol>
</div>

        
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

        
        {/* <a href="#">Contact</a> */}
        <Popup modal trigger={<a href="#">Contact</a>}>
              {close => <MyForm uemail="nithinbs18@gmail.com" close={close}/>}
        </Popup>
      </div>
    );
  }
}
