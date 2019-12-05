import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa"
export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Welcome to PawPal"
          subtitle="Don't shop, Just ADOPT..!!"
        >
        <p className="landing-p">Begin your love for Adoption</p>
          <Link to="/rooms" className="landing-btn">
            <FaPaw />
          </Link>
        </Banner>
      </Hero>
    </>
  );
}
