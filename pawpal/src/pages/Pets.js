import React from "react";
import SideNav from "../components/SideNav";
import dogImg from "../images/Dog_choose_1.png";
import catImg from "../images/Cat_choose_1.png";
import Pet from "../components/Pet";
//import Petfilter from "../components/Petfilter";
import PetContainer from "../components/PetContainer"

    const Pets = () =>{
        return (
                <>
                <SideNav />
                <Pet />
                <PetContainer />
            </>
        );
    }
    
    export default Pets;