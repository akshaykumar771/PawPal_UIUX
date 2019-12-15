import React, { Component } from 'react'
import SideNav from '../components/SideNav';
import { PetContext } from "../context";
import { Link } from "react-router-dom";
import StyledHero from "../components/StyledHero";
import defaultBcg from "../images/room-1.jpeg";
import Popup from "reactjs-popup";
import MyForm from "../components/Form.js";
import "../components/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SinglePet extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props);
         this.state = {
           slug: this.props.match.params.slug,
           defaultBcg,
           images: []
         };
      }
      static contextType = PetContext;
    render() {
      var settings = {
        dots: true
      };
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
          console.log(images)
          //const [mainImg, ...defaultImg] = images;
        return (
            <div>
                {/* <SideNav /> */}
                {/* <StyledHero img={mainImg || this.state.defaultBcg}></StyledHero>
                <div>
                  <div className="single-room-images">
                    {defaultImg.map((item, index) => {
                      return <img key={index} src={item} alt={name} />;
                    })}
                  </div> */}
                  <div className = "container">
                  <Slider {...settings}>
                    {images.map((image, index) =>
                      <div>
                        <img key={index} src={image} alt=""/>
                      </div>
                    )}
                  </Slider>
                  </div>
                  <div>
                 
                     
      
                    )}
                  </div>
                  <div className="row col-md-12 no-rpadding">
                    <div className="desc">
                      <div className="card text-white bg-secondary mb-3">
                        <div className="card-body">
                          <h5 className="card-title">Hi I am {name} !</h5>
                          <p className="card-text">{description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 no-lpadding">
                      <div className="card text-white bg-secondary mb-3">
                        <div className="card-body">
                          <h5 className="card-title">About {name}</h5>
                          <p>Age : {age} months old</p>
                          <p>Gender : {gender}</p>
                          <p>Breed : {slug}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 no-rpadding">
                      <div className="card text-white bg-secondary mb-3">
                        <div className="card-body">
                          <h5 className="card-title">About {name}'s Owner</h5>
                          <p>Name: {uname}</p>
                          <p>Email: {email}</p>
                          <p>Telephone: {phno}</p>
                          <Popup modal trigger={<button className="btn-primary"> Contact Owner</button>}>
                            <MyForm />
                          </Popup>
                        </div>
                      </div>
                    </div>
                  </div>
                 
      
            <Popup modal trigger={<button className="btn-primary"> Contact </button>}>
              <MyForm />
            </Popup>
            </div>
        )
    }
}
