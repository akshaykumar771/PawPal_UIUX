import React, { Component } from "react";
import SideNav from "../components/SideNav";
import Pet from "../components/Pet";
import { PetContext } from "../context";
import Loading from "../components/Loading";
import PetContainer from "../components/PetContainer";
import { browserHistory } from 'react-router';

    export default class NewPets extends Component {
      static contextType = PetContext;
      componentWillUnmount() {
        window.location.reload();
      }
      render() {
        let { loading,typeDog: pets } = this.context;
        pets = pets.map(pet => {
          return <Pet key={pet.id} pet={pet} />;
        });
    
        return (
            <>
            <SideNav />
            <PetContainer />
          <section className="new-pets">
            <div className="col-md-9 offset-3 row ">
            {loading ? <Loading /> : pets}
            </div>
          </section>
          
          </ >
        );
      }
    }
    