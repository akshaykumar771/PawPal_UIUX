import React from "react";
import { FaPaw } from "react-icons/fa"
import Popup from "reactjs-popup";
import MyForm from "./Form";
import "./styles.css";

export default function SideNav({ sidenav }) {
    return (
      <div className="col-md-3 sidenav">
        <h1> <FaPaw /> PawPal</h1>
        <a href="/rooms">About</a>
        <a href="/pets">Services</a>
        {/* <a href="#">Contact</a> */}
        <Popup modal trigger={<a href="#">Contact</a>}>
              <MyForm />
        </Popup>
      </div>


    );
  }