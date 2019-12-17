import React, { Component } from "react";
import Pet from "../components/Pet";
import { PetContext } from "../context";
import SideNav from "../components/SideNav";
import Loading from "../components/Loading";
import PetContainer from "../components/PetContainer";


    export default class NewPets extends Component {
      static contextType = PetContext; //refreshState
      componentDidMount(){
        let { setFlag1, unsetDogFlag } = this.context;
        unsetDogFlag();
        setFlag1();
      }
      componentWillUnmount() {
        let { refreshState } = this.context;
        refreshState();
        
      }
      render() {
        let { loading, typeCat: pets } = this.context;
        pets = pets.map(pet => {
          return <Pet key={pet.id} pet={pet} />;
        });
    
        return (
          <>
          <SideNav />
          <PetContainer /> 
        <section className="new-pets">
          <div className="row col-md-9 offset-3">
          {pets.length === 0 ? <h3 className="error-message"> Sorry pet not found!! </h3>: loading ? <Loading /> : pets} 
          </div>
        </section>
        </ >
        );
      }
    }
    