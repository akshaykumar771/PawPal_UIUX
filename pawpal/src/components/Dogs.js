import React, { Component } from 'react'
import { PetContext } from "../context";
import PetList from "./PetList"
export default class Dogs extends Component {
    static contextType = PetContext;
    render() {
        let { loading, typeDog: pets } = this.context;
    pets = pets.map(pet => {
      return <PetList key={pet.id} pet={pet} />;
    });
        return (
            <section className="new-pets">
         <div className="featured-rooms-center">
           {loading ? <Loading /> : pets}
         </div>
       </section>
        
        )
    }
}

    

