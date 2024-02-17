import React from "react";
import Navbar from "../components/Navbar";
import Shapes from "../images/shapes.jpg";
import Controller from "../images/controller.jpg";
import Keyboard from "../images/keyboard.jpg";
import Retro from "../images/retro.jpg";
import "../styles/Home.css";

export interface IHomeProps {
  name: string;
  paragraph: string;
  imgSrc: string;
  imgAlt: string;
}

const Home: React.FunctionComponent<IHomeProps> = ({ name, paragraph }) => {
  return (
    <div>
      {/* image and new alert here*/}
      <div className="main-content">
        <img className="shapes-image" src={Shapes} alt="Shape image" />
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">New</h4>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <p className="p-2">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
          <p className="p-2">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>

          <p className="p-3">
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
        </div>
      </div>
      {/* text information here*/}
      <div className="text-container">
        <h1 className="main-title"> The Bright Future of Web 3.0? {name}</h1>
        <p className="text">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But its
          really fulfilling its promise?
        </p>
        <button type="button" className="btn btn-primary btn-lg">
          Read More
        </button>
      </div>
      {/* bottom images here*/}
      <div className="container-row">
        <div className="container">
          <img className="retro-pic" src={Retro} alt="description of image" />
          <h2 className="number">01</h2>
          <h5 className="retro-title">Reviving Retro PCs</h5>
          <p className="retro-info">
            What happens when old PCs are given modern upgrades.
          </p>
        </div>
        <div className="container">
          <img
            className="retro-pic"
            src={Keyboard}
            alt="description of image"
          />
          <h2 className="number">02</h2>
          <h5 className="retro-title">Top 10 Laptops of 2024</h5>
          <p className="retro-info">
            Our best picks of various needs and budgets
          </p>
        </div>
        <div className="container">
          <img
            className="retro-pic"
            src={Controller}
            alt="description of image"
          />
          <h2 className="number">03</h2>
          <h5 className="retro-title">The Growth of Gaming</h5>
          <p className="retro-info">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
