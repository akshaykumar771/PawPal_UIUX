import React, { Component } from "react";
import SideNav from "../components/SideNav";
import dogImg from "../images/Dog_choose_1.png";
import catImg from "../images/Cat_choose_1.png";
import Pet from "../components/Pet";
import { PetContext } from "../context";
import Loading from "../components/Loading";

    export default class NewPets extends Component {
      static contextType = PetContext;
      render() {
        let { loading, typeCat: pets } = this.context;
        pets = pets.map(pet => {
          return <Pet key={pet.id} pet={pet} />;
        });
    
        return (
          <>
          <SideNav />
        <section className="new-pets">
          <div className="featured-rooms-center">
          {loading ? <Loading /> : pets}
          </div>
        </section>
        </ >
        );
      }
    }
    