import React from "react";
import SideNav from "../components/SideNav";
import dogImg from "../images/Dog_choose_1.png";
import catImg from "../images/Cat_choose_1.png";
import Pet from "../components/Pet";
import Petfilter from "../components/Petfilter";

export default function Pets({ pets }) {
    return (
        <div className="row">
            <SideNav />
            <div className="row col-md-9 offset-md-3 content-justify">
                <Petfilter />
                <Pet />
            </div>
        </div>
    );
}