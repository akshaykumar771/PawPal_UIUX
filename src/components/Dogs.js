import React, { Component } from 'react'
import { PetContext } from "../context";
export default class Dogs extends Component {
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

    

