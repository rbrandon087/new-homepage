import React from "react";
import Navbar from "../components/Navbar";
import Shapes from "../images/shapes.jpg";
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
      <h1> {name}</h1>
      {/* Shapes image*/}
      <img className="shapes-image" src={Shapes} alt="Shape image" />
      {/* Text  info here */}
      <div className="content">
        <section>
          <p className="big-text">The Bright Future of Web 3.0? {paragraph}</p>
          <p className="big-info"></p>
        </section>
      </div>
      <div className="button-container">
        {/* Button  */}
        <button type="button" className="btn btn-primary">
          Read More
        </button>
      </div>
      {/* Info section here*/}
      <div>
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
    </div>
  );
};

export default Home;
