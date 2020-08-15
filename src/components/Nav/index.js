import React from "react";
import "./style.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top py-3">
            <a href="#" className="navbar-brand text-uppercase font-weight-bold">Welcome Wanderer</a>
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>
            <div id="navbarSupportedContent" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><a href="#" className="nav-link text-uppercase font-weight-bold">Home <span
                        className="sr-only">(current)</span></a></li>
                    <li className="nav-item"><a href="#about-me" className="nav-link text-uppercase font-weight-bold">About</a></li>
                    <li className="nav-item"><a href="#examples" className="nav-link text-uppercase font-weight-bold">Portfolio</a></li>
                    <li className="nav-item"><a href="#infoList" className="nav-link text-uppercase font-weight-bold">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;