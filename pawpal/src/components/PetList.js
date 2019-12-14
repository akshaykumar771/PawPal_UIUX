import React from "react";
import Pet from "./Pet";
export default function PetList({ pets }) {
  if (pets.length === 0) {
    return (
       <div className="empty-search"> 
        <h3>unfortunately no pets matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {pets.map(item => {
          return <Pet key={item.id} pet={item} />;
        })}
      </div>
   </section> 
  );
}
