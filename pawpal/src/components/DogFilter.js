import React from "react";
import { useContext } from "react";
import { PetContext } from "../context";
import Title from "./Title";

//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export default function PetFilter({ pets }) {
   const context = useContext(PetContext);
   const {
     handleChange,
     gender,
  
   } = context;
  // // get unique types
  let genders = getUnique(pets, "gender");
  // add all
  genders = ["all", ...genders];

  // // map to jsx
  genders = genders.map((item, index) => {
    return (
      <option value={item} key={index} >
        {item}
      </option>
    );
  });

   return (
      <section className="filter-container">
      <Title title="search dogs" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="gender">select gender</label>
          <select
            name="gender"
            id="gender"
            className="form-control"
            onChange={handleChange}
          >
            {genders}
          </select>
        </div>
        </form>
        </section> 
  );
} 