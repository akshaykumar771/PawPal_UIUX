import React, { Component } from 'react'
import { PetContext } from "../context";
import PetList from "./PetList"
export default class Dogs extends Component {
    // static contextType = PetContext;
    // render() {
    //     let { loading, typeDog: pets } = this.context;
    // pets = pets.map(pet => {
    //   return <PetList key={pet.id} pet={pet} />;
    // });
    //     return (
    //         <section className="new-pets">
    //      <div className="featured-rooms-center">
    //        {loading ? <Loading /> : pets}
    //      </div>
    //    </section>
    constructor(props) {
        super(props);
        //console.log(this.props);
         this.state = {
           type: this.props.match.params.type,
           defaultBcg
         };
      }
      static contextType = PetContext;
      render(){
        const { getPetType } = this.context;
        const pet = getPetType(this.state.type);
        if (!pet) {
            return (
              <div className="error">
                <h3>no such pet could be found...</h3>
                <Link to="/choosepets" className="btn-primary">
                  back to choose pets
                </Link>
              </div>
            );
          }
          return(
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
        );
    }
}

    

