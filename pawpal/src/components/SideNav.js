import React from "react";
import { FaPaw } from "react-icons/fa"

export default function SideNav({ sidenav }) {
    return (
      <div className="col-md-3 sidenav">
        <h1> <FaPaw /> PawPal</h1>
        <a href="/rooms">About</a>
        <a href="/pets">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>


    );
  }