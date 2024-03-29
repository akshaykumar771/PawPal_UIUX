import React, { Component } from 'react';
import { FaPaw } from "react-icons/fa"

import "./styles.css";
import {Link} from "react-router-dom";
import { PetContext } from "../context";
import Popup from "reactjs-popup";
import MyForm from "./Form";
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
    // let { flag1 } = this.context;
    // flag1 = true;
  }

  render() {
    let { flag1, flag2, dogflag } = this.context;
    return (
      <div className="col-md-3 sidenav">
        <h1>   
        <FaPaw /> 
        <Link style={{color : "#e2b2b2",paddingLeft : "12px",fontWeight: "bold"}} to="/">PawPal</Link>
        </h1>
       <div className="text-element content-element circles-list">
          <ol>
          <li><Link to ="/choosepets/" style={{color : "white", fontSize: "large",fontWeight: "bold"}}>Dogs or Cats??</Link></li>
          {flag1 === false ? <li className="libefore">Pet Basics </li> : <li >{dogflag === true ?<Link style={{color : "white", fontSize: "large",fontWeight: "bold"}} to="/choosepets/Dogs">Pet Basics </Link>: <Link style={{color : "white", fontSize: "large",fontWeight: "bold"}} to="/choosepets/Cats">Pet Basics </Link>}</li>}
          {flag2 === false ? <li className="libefore">Pet Details</li> : <li > <Link style={{color : "white", fontSize: "large",fontWeight: "bold"}}>Pet Details</Link></li>}
          </ol>
          </div> 
          <div className="text-center">
            <p className="contact-text">Want to put up your pet for adoption?</p><br/>
                <Popup modal trigger={<button className="btn btn-primary cstm-btn">Contact Us</button>}>
                  {close => <MyForm name="" slug="" id="" uemail={"nithinbs18@gmail.com"} close={close} msg={"Hello!! Contact us to put up your pet for adoption."}/>}
                </Popup>
                </div>
      </div>
    );
  }
}
