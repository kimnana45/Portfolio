import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg fixed-top py-3">
            <Link to="/" className="navbar-brand text-uppercase font-weight-bold">Welcome Wanderer</Link>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>
            <div id="navbarSupportedContent" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><Link to="/" className="nav-link text-uppercase font-weight-bold">Home<span
                        className="sr-only">(current)</span></Link></li>
                    <li className="nav-item"><Link to="/aboutme" className="nav-link text-uppercase font-weight-bold">About</Link></li>
                    <li className="nav-item"><Link to="/portfolio" className="nav-link text-uppercase font-weight-bold">Portfolio</Link></li>
                    <li className="nav-item"><Link to="/contact" className="nav-link text-uppercase font-weight-bold">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;