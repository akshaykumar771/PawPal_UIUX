import React, { Component } from 'react'
import { PetContext } from "../context";
import Card from "../components/Card";
import dogImg from "../images/Dog_choose_1.png";
import catImg from "../images/Cat_choose_1.png";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
export default class ChoosePets extends Component {
  render(){
    return (
      <div>
      <Card />
      </div>
      
    );
  }

}
