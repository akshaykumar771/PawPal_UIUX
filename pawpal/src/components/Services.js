import React, { Component } from "react";
import { FaCreativeCommonsNcEu,FaHandshake, FaBinoculars } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaBinoculars />,
        title: "Choose From A Varierty Of Pets ",
        info:
          "At Pawpal you will get to select from a variety of pets"
      },
      {
        icon: <FaHandshake />,
        title: "Find Other Pet Lovers",
        info:
          "At Pawpal you will get to meet the others who love pets"
      },
      {
        icon: <FaCreativeCommonsNcEu/>,
        title: "Say Adios to Commercialism",
        info:
          "Say No to Breeders and Puppy mills"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
