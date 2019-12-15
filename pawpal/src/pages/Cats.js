import React, { Component } from "react";
import Pet from "../components/Pet";
import { PetContext } from "../context";
import SideNav from "../components/SideNav";
import Loading from "../components/Loading";
import PetContainer from "../components/PetContainer";


    export default class NewPets extends Component {
      static contextType = PetContext; //refreshState
      componentWillUnmount() {
        window.location.reload();
      }
      render() {
        let { loading, typeCat: pets, refreshState } = this.context;
        refreshState();
        pets = pets.map(pet => {
          return <Pet key={pet.id} pet={pet} />;
        });
    
        return (
          <>
          <SideNav />
          <PetContainer /> 
        <section className="new-pets">
          <div className="row col-md-9 offset-3">
          {loading ? <Loading /> : pets}
          </div>
        </section>
        </ >
        );
      }
    }
    