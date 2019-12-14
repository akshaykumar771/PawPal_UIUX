import React from "react";
import dogImg from "../images/Dog_choose_1.png";
import catImg from "../images/Cat_choose_1.png";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
export default function Card({ pet }) {
    //const {type,images} = pet;
    return (
        <>
        
        <div className = "main_card">
        
            <div className="card">
            
                <div className="card-body">
                <div className="img-container">
                    <img className ="card-img-top" src={dogImg} alt="Avatar" />
                    <Link to={`/choosepets/Dogs`} className="btn-primary room-link">
           Details
        </Link>
                </div>
            </div>

            <div className="card">
            
                <div className="card-body">
                    <img className ="card-img-top" src={catImg} alt="Avatar" />
                    <Link to={`/choosepets`} className="btn-primary room-link">
           Details
        </Link>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}
// Card.propTypes = {
//     pet: PropTypes.shape({
//       type: PropTypes.string.isRequired,
//       images: PropTypes.arrayOf(PropTypes.string).isRequired,
//     })
//   }