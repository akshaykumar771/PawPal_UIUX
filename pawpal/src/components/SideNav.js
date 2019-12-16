import React, { Component } from 'react';
import { FaPaw } from "react-icons/fa"

import "./styles.css";
import {Link} from "react-router-dom";
import { PetContext } from "../context";

export default class SideNav extends Component {
  static contextType = PetContext;
  constructor(props){
    super(props)
      this.state = {
        typeDog:[],
        typeCat:[]
      }
  }
  componentDidMount(){
    let { flag1 } = this.context;
    flag1 = true;
  }

  render() {
    let { flag1, flag2, dogflag } = this.context;
    return (
      <div className="col-md-3 sidenav">
        <h1> <FaPaw />  
        <Link to="/">PawPal</Link>
        </h1>
       <div class="text-element content-element circles-list">

          <ol>
          <li><Link to ="/choosepets/">Dogs or Cats??</Link></li>
          {flag1 === false ? <li>Pet Basics </li> : <li>{dogflag === true ?<Link to="/choosepets/Dogs">Pet Basics </Link>: <Link to="/choosepets/Cats">Pet Basics </Link>}</li>}
          {flag2 === false ? <li>Pet Details</li> : <li> <a href="#">Pet Details</a></li>}
          </ol>
          </div>

        {/* <a href="#">Contact</a> */}
        
      </div>
    );
  }
}
