import React from "react";
import dogImg from "../images/Dog_choose_1.png";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
export default function Pet({ pet}) {
    const { name, slug, images } = pet;
    return (
    
        /* <div className="col-md-3">
            <div className="card">
                <img className="card-img-top" src={dogImg} />
                <div className="card-body">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
        </div>*/

        //new code
        <article className="room">
        <div className="img-container">
             <img src={images[0]} alt="single pet" />
            <Link to={`/pets/${slug}`} className="btn-primary room-link">
           Details
        </Link>
        <p className="room-info">{name}</p>
        </div>
            </article>
        
    );
}

Pet.propTypes = {
      pet: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    }