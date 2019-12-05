import React from "react";
import dogImg from "../images/Dog_choose_1.png";

export default function Petcard({ petcard }) {
    return (
        <div className="pet_container">
            <div>
            <img src={dogImg} />
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
        </div>
    );
}