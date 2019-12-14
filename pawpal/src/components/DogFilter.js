import React from "react";
import { useContext } from "react";
import { PetContext } from "../context";
import Title from "./Title";

// get all unique values
const getUnique = (items, value) => {
  
   return [...new Set(items.map(item => item[value]))];
  //return console.log(items);
};
export default function PetFilter({ pets }) {
  const context = useContext(PetContext);
  const {
    handleChange,
    gender,
  } = context;
  // get unique types
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
  // let people = getUnique(rooms, "capacity");
  // people = people.map((item, index) => {
  //   return (
  //     <option key={index} value={item}>
  //       {item}
  //     </option>
  //   );
  // });

   return (
     
        <section className="filter-container">
      <Title title="search dogs" />
      <form className="filter-form">
        {/*select type  */}
        <div className="form-group">
          <label htmlFor="gender">select gender</label>
          <select
            name="gender"
            id="gender"
            //value={gender}
            className="form-control"
            onChange={handleChange}
          >
            {genders}
          </select>
        </div>
        </form>
        </section> 
     
  //   <section className="filter-container">
  //     <Title title="search rooms" />
  //     <form className="filter-form">
  //       {/*select type  */}
  //       <div className="form-group">
  //         <label htmlFor="type">room type</label>
  //         <select
  //           name="type"
  //           id="type"
  //           value={type}
  //           className="form-control"
  //           onChange={handleChange}
  //         >
  //           {types}
  //         </select>
  //       </div>
  //       {/* end select type */}
  //       {/*guests   */}
  //       <div className="form-group">
  //         <label htmlFor="capacity">Guests</label>
  //         <select
  //           name="capacity"
  //           id="capacity"
  //           value={capacity}
  //           className="form-control"
  //           onChange={handleChange}
  //         >
  //           {people}
  //         </select>
  //       </div>
  //       {/* end guests  */}
  //       {/* room price */}
  //       <div className="form-group">
  //         <label htmlFor="price">room price ${price}</label>
  //         <input
  //           type="range"
  //           name="price"
  //           min={minPrice}
  //           max={maxPrice}
  //           id="price"
  //           value={price}
  //           onChange={handleChange}
  //           className="form-control"
  //         />
  //       </div>
  //       {/* end of room price */}
  //       {/* size */}
  //       <div className="form-group">
  //         <label htmlFor="size">room size</label>
  //         <div className="size-inputs">
  //           <input
  //             type="number"
  //             name="minSize"
  //             id="size"
  //             value={minSize}
  //             onChange={handleChange}
  //             className="size-input"
  //           />
  //           <input
  //             type="number"
  //             name="maxSize"
  //             id="size"
  //             value={maxSize}
  //             onChange={handleChange}
  //             className="size-input"
  //           />
  //         </div>
  //       </div>
  //       {/* end of size */}
  //       {/* extras  */}
  //       <div className="form-group">
  //         <div className="single-extra">
  //           <input
  //             type="checkbox"
  //             name="breakfast"
  //             id="breakfast"
  //             checked={breakfast}
  //             onChange={handleChange}
  //           />
  //           <label htmlFor="breakfast">breakfast</label>
  //         </div>
  //         <div className="single-extra">
  //           <input
  //             type="checkbox"
  //             name="pets"
  //             id="pets"
  //             checked={pets}
  //             onChange={handleChange}
  //           />
  //           <label htmlFor="pets">pets</label>
  //         </div>
  //       </div>
  //       {/* end of extras  */}
  //     </form>
  //   </section>
  );
} 
