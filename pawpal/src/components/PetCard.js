import React from "react";
import dogImg from "../images/Dog_choose_1.png";

export default function Petcard({ petcard }) {
    return (
        <div className="col-md-3">
            <div className="card">
                <img className="card-img-top" src={dogImg} />
                <div className="card-body">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
        </div>
        
    );
}