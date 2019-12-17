import React from "react";
import { useContext } from "react";
import { PetContext } from "../context";

export default function PetFilter({ pets }) {
   const context = useContext(PetContext);
   const {
     handleChange,
     age,
     maxAge,
     minAge,
   } = context;
   return (
      <section className="col-md-9 offset-3 padding-tb pets-bg">
      <br/>
      <form className="row filter-form">
        <div className="col-md-4 form-group">
          <label htmlFor="gender">select Gender</label>
          <select
            name="gender"
            id="gender"
            className="form-control"
            onChange={handleChange}
          >
            <option value="all">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="col-md-4 offset-4 form-group">
        <label htmlFor="age" className="select-age"> Select Age</label>
        <label className="age-slider" htmlFor="age">{age} Months old</label>
        <input
          type="range"
          name="age"
          min={minAge}
          max={maxAge}     
          id="age"
          onChange={handleChange}
          className="form-control-range"
        />
      </div> 
      </form>
      </section>
  );
} 
