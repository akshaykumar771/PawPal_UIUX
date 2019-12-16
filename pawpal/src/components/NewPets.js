import React, { Component } from "react";
import { PetContext } from "../context";
import Loading from "./Loading";
import Pet from "./Pet";
import Title from "./Title";
export default class NewPets extends Component {
  static contextType = PetContext;
  render() {
    let { loading, newPets: pets } = this.context;
    pets = pets.map(pet => {
      return <Pet key={pet.id} pet={pet} />;
    });

    return (
      <section className="new-pets">
        <Title title="new comers" />
        <div className="col-md-12 row">
          {loading ? <Loading /> : pets}
        </div>
      </section>
    );
  }
}
