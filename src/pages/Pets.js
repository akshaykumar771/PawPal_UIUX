import React, { Component } from "react";
import SideNav from "../components/SideNav";
import Pet from "../components/Pet";
import { PetContext } from "../context";
import Loading from "../components/Loading";
import PetContainer from "../components/PetContainer";

    export default class NewPets extends Component {
      
      static contextType = PetContext;

      componentDidMount(){
        let { setFlag1, setDogFlag } = this.context;
        setFlag1();
        setDogFlag();
      }
      componentWillUnmount() {
        let { refreshState} = this.context;
        refreshState();
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
            {pets.length === 0 ? <h3> Sorry pet not found!! </h3> : loading ? <Loading /> : pets} 
            </div>
          </section>
          
          </ >
        );
      }
    }
    