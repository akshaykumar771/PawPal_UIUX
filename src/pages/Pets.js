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
              {console.log(pets)}
            {pets.length === 0 ? <h3>unfortunately no pets matched your search parameters</h3> : <div />}
            {loading ? <Loading /> : pets}
            </div>
          </section>
          
          </ >
        );
      }
    }
    