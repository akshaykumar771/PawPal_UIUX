import React from "react";
import SideNav from "../components/SideNav";
import dogImg from "../images/Dog_choose_1.png";
import catImg from "../images/Cat_choose_1.png";
import Petcard from "../components/PetCard";

export default function Pets({ pets }) {
    return (
        <div>
            <SideNav />
            <Petcard />
        </div>
    );
}