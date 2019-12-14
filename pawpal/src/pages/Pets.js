import React, { Component } from "react";
import SideNav from "../components/SideNav";
import dogImg from "../images/Dog_choose_1.png";
import catImg from "../images/Cat_choose_1.png";
import Pet from "../components/Pet";
import { PetContext } from "../context";
import Loading from "../components/Loading";
import DogFilter from "../components/DogFilter";
import PetContainer from "../components/PetContainer";

    export default class NewPets extends Component {
      static contextType = PetContext;
      
      render() {
        let { loading,typeDog: pets } = this.context;
        pets = pets.map(pet => {
          return <Pet key={pet.id} pet={pet} />;
        });
    
        return (
            <>
            {/* <SideNav /> */}
            <PetContainer /> 
            
            {/* //<DogFilter pets={pets}/> */}
          <section className="new-pets">
            <div className="featured-rooms-center">
            {loading ? <Loading /> : pets}
            </div>
          </section>
          
          </ >
        );
      }
    }
    