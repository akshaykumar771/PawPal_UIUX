import React, { Component } from 'react'
import Pet from "./Pet";
import { PetContext } from "../context";
import Loading from "../components/Loading";
export default class PetList extends Component {
  static contextType = PetContext;
  render() {
    let { loading, typeDog: pets } = this.context;
    pets = pets.map(pet => {
      return <Pet key={pet.id} pet={pet} />;
    });  
    if (pets.length === 0) {
      return (
         <div className="empty-search"> 
          <h3>unfortunately no pets matched your search parameters</h3>
        </div>
      );
    }
    return (
      <section className="new-pets">
            <div className="col-md-9 offset-3 row">
            {loading ? <Loading /> : pets}
            </div>
          </section>
    )
  }
}


