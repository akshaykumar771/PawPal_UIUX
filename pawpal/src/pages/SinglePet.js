import React, { Component } from 'react'
import SideNav from '../components/SideNav';
import { PetContext } from "../context";
import { Link } from "react-router-dom";
import StyledHero from "../components/StyledHero";
import defaultBcg from "../images/room-1.jpeg";
export default class SinglePet extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props);
         this.state = {
           slug: this.props.match.params.slug,
           defaultBcg
         };
      }
      static contextType = PetContext;
    render() {
        const { getPet } = this.context;
        const pet = getPet(this.state.slug);
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
          const {
            name,
            description,
            age,
            gender,
            slug,
            email,
            phno,
            uname,
            images
          } = pet;
          const [mainImg, ...defaultImg] = images;
        return (
            <div>
                {/* <SideNav /> */}
                <StyledHero img={mainImg || this.state.defaultBcg}></StyledHero>
                <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>age : {age} months old</h6>
              <h6>gender : {gender}</h6>
              <h6>Breed : {slug}</h6>
              <h3>Owner Details</h3>
              <h6>name: {uname}</h6>
              <h6>email: {email}</h6>
              <h6>telephone: {phno}</h6>
            </article>
          </div>
        </section> 
        <Link to="/rooms" className="btn-primary">
              Contact
            </Link>
            </div>
        )
    }
}
