import React from "react";
import dogImg from "../images/Dog_choose_1.png";
import catImg from "../images/Cat_choose_1.png";
import { Link } from "react-router-dom";

export default function Card({ card }) {
    return (
        <div className = "main_card">
            <div className="card">
                <div className="card-body">
                    <img className ="card-img-top" src={dogImg} alt="Avatar" />
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <img className ="card-img-top" src={catImg} alt="Avatar" />
                </div>
            </div>
        </div>
    );
}