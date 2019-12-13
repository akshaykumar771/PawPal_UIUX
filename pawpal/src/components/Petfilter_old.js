import React from "react";

export default function Petfilter({ petfilter }) {
    return (
        <div className="row col-md-12 filter-class">
            <div className="col-md-4">
                <div class="form-group">
                    <label for="pettype">Cat or Dog ?</label>
                    <select class="form-control">
                        <option>Cat</option>
                        <option>Dog</option>
                    </select>
                </div>
            </div>
            <div className="col-md-4">
                <div class="form-group">
                    <label for="pettype">Gender</label>
                    <select class="form-control">
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
            </div>
            <div className="col-md-4">
                <div className="form-group">
                <label htmlFor="price">Age of the Pet</label>
                {/* <input
                    type="range"
                    name="price"
                    min={minPrice}
                    max={maxPrice}
                    id="price"
                    value={price}
                    onChange={handleChange}
                    className="form-control"/> */}
                </div>
            </div>
        </div>
    );
}