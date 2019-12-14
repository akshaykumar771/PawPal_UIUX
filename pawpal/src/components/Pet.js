import React from "react";
import dogImg from "../images/Dog_choose_1.png";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import pets from "../data";
import img11 from "../images/image11.jpg";
import PetList from "./PetList";

export default function Pet({ pet}) {
    const { name, slug, images } = pet;
    return (
        <article className="room">
        <div className="img-container">
            
             <img src={images[0]} alt="single pet" />
            <Link to={`/pets/${slug}`} className="btn-primary room-link">
           Details
        </Link>
        <p className="room-info">{name}</p>
        {/* {console.log(pet)} */}
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