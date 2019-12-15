import React from "react";
import { FaPaw } from "react-icons/fa"
import Popup from "reactjs-popup";
import MyForm from "./Form";
import "./styles.css";

export default function SideNav({ sidenav }) {
    return (
      <div className="col-md-3 sidenav">
        <h1> <FaPaw /> PawPal</h1>
        <ul>
          <li class="current"><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

    );
  }