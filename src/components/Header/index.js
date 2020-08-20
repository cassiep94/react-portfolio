import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import pdf from '../../assets/cassandra.pdf'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="#">Cassandra Perez</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-item nav-link active" to="/">About</Link>
                <Link className="nav-item nav-link" to="/portfolio">Portfolio</Link>
                <Link className="nav-item nav-link" to="/contact">Contact</Link>
                <a className="nav-item nav-link" href="https://www.linkedin.com/in/cassandra-perez-enriquez-b828591a2/"
                    target="_blank">LinkedIn
                    Profile</a>
                <a className="nav-item nav-link" href="https://github.com/cassiep94" target="_blank">GitHub
                    Profile</a>
                <a className="nav-item nav-link" href={pdf}>Resume</a>
            </div>
        </div>
    </nav>

  );
}

export default Header;
