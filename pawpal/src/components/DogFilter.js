import React from "react";
import { useContext } from "react";
import { PetContext } from "../context";
import Title from "./Title";


const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export default function PetFilter({ pets }) {
   const context = useContext(PetContext);
   const {
     handleChange,
     gender,
     age,
     maxAge,
     minAge,
   } = context;
  let genders = getUnique(pets, "gender");
  genders = ["all", ...genders];
  genders = genders.map((item, index) => {
    return (
      <option value={item} key={index} >
        {item}
      </option>
    );
  });
   return (
        <section className="col-md-9 offset-3 padding-tb">
      <Title title="Filter" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="gender">select gender</label>
          <select
            name="gender"
            id="gender"
            className="form-control"
            onChange={handleChange}
          >
            <option value="all">all</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
        <label htmlFor="price">{age} Months old</label>
        <input
          type="range"
          name="age"
          min={minAge}
          max={maxAge}     
          id="age"
          onChange={handleChange}
          className="form-control"
        />
      </div> 
      </form>
      </section>
  );
} 
