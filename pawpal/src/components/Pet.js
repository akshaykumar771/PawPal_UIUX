import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Pet({ pet}) {
    const { name, slug, images } = pet;
    return (
        <div className="card">
            <img className="card-img-top" src={images[0]} alt="Single Pet" />
            <div className="card-body">
            <Link to={`/pets/${slug}`}>
                <h5 className="card-title">Meet {name}</h5>
            </Link>
            </div>
        </div>
        
    );
}

Pet.propTypes = {
      pet: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    }