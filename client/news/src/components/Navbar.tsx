import React from "react";
import "../styles/Navbar.css";

export interface INavbarProps {
  name: string;
}

const Navbar: React.FunctionComponent<INavbarProps> = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <nav className="navbar navbar-expand-lg  navbar-color">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            W.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="/">
                Home
              </a>
              <a className="nav-link" href="/New">
                New
              </a>
              <a className="nav-link" href="/Popular">
                Popular
              </a>
              <a className="nav-link" href="/Trending">
                Trending
              </a>
              <a className="nav-link" href="Categories">
                Categories
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
