import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Find a Pet you Like",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      },
      {
        icon: <FaHiking />,
        title: "Meet and Greet",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      },
      {
        icon: <FaShuttleVan />,
        title: "Paperwork",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      },
      {
        icon: <FaBeer />,
        title: "Finalize Adoption",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="How it works" />
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
