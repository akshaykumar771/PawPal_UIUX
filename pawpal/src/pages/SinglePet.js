import React, { Component } from 'react'
import SideNav from '../components/SideNav';
import { PetContext } from "../context";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import MyForm from "../components/Form.js";
import "../components/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SinglePet extends Component {
    constructor(props) {
        super(props);
         this.state = {
           id: this.props.match.params.id,
          //  defaultBcg,
           images: []
         };
      }
      componentDidMount(){
        let { setFlag2 } = this.context;
        setFlag2();
      }
      componentWillUnmount(){
        let { unsetFlag2 } = this.context;
        unsetFlag2();
      }
      static contextType = PetContext;
    render() {
      var settings = {
        dots: true,
        initialSlide: 1,
        centerMode: true
      };
        const { getPet } = this.context;
        const pet = getPet(this.state.id);
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
            uname,
            city,
            images
          } = pet;
          // console.log(images)
          //const [mainImg, ...defaultImg] = images;
        return (
            <div className="col-md-12">
                <SideNav />
                  <div className = "col-md-9 offset-3 container pet-carousel">
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
                  <div className="row col-md-9 offset-3 no-rpadding">
                    <div class="card col-md-12 text-white bg-secondary">
                      <div class="card-body ">
                        <div className="row">
                          <div className="col-md-8">
                            <p className="card-text pet-desc">{description}</p>
                          </div>
                          <div className="col-md-4">
                          <h5 className="card-title">About {name}</h5>
                            <p>Age : {age} months old</p>
                            <p>Gender : {gender}</p>
                            <p>Breed : {slug}</p>
                            <h5 className="card-title">About {name}'s Owner</h5>
                            <p>{uname}</p>
                            <p>{city}</p>
                            <Popup modal trigger={<button className="btn-primary btn-contact"> Contact Owner</button>}>
                            {close => <MyForm name={pet.name} slug={pet.slug} id={pet.id} uemail={pet.email} close={close} msg={"Hello!! Please tell us something about yourself!!"}/>}
                            </Popup>
                          </div> 
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        )
    }
}
