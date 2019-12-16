import React, { Component } from 'react';
import dogImg from "../images/Dog_Ch_1.png";
import catImg from "../images/Cat_Ch_1.png";
import { PetContext } from "../context";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import SideNav from "./SideNav"


export default class Card extends Component {
    static contextType = PetContext;
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        let { unsetFlag1} = this.context;
        console.log("Resetting pet basic");
        unsetFlag1();
    }
    render() { 
        return (
            <>
            <SideNav />
            <div className = "main_card">
                <div className="card">
                    <div className="card-body">
                        <div className="img-container">
                            <img className ="card-img-top" src={dogImg} alt="Avatar" />
                            <Link   to={`/choosepets/Dogs`} className="btn-primary room-link" >
                            Dog Person ?</Link>
                        </div>
                    </div>
                </div>
    
                <div className="card">
                    <div className="card-body">
                        <div className="img-container">
                            <img className ="card-img-top" src={catImg} alt="Avatar" />
                        <Link to={`/choosepets/Cats`} className="btn-primary room-link">Cat Person ?</Link>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
 Card.propTypes = {
     pet: PropTypes.shape({
       type: PropTypes.string.isRequired,
       images: PropTypes.arrayOf(PropTypes.string).isRequired,
     })
   }
