import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Pet({ pet}) {
    const { name, slug, images, description } = pet;
    return (
        <div className="col-md-4">
            <div className="card">
                <img className="card-img-top pet-card-img" src={images[0]} alt="Single Pet" />
                <div className="card-body body-pet">
                <h4>{name}</h4>
                <p className="overflow-text">{description}</p>
                <Link to={`/pets/${slug}`} className="rounded-btn">
                    <p className="card-title">More info</p>
                </Link>
                </div>
            </div>
        </div>
        
    );
}

Pet.propTypes = {
      pet: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        description: PropTypes.string.isRequired,
      })
    }