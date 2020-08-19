import React from "react";
import BurgerApp from "../../assets/burgerApp.png";
import EmployeeTracker from "../../assets/employeeTracker.png";
import NoteTaker from "../../assets/noteTaker.png";
import PostToSold from "../../assets/posttosold.png";
import TheClassicGenius from "../../assets/TheClassicGenius.png";
import WeatherApp from "../../assets/WeatherApp.png";

const Card = ({ id, title, description, github, deployment, image }) => {
    let projectID = id;
    let projects = [BurgerApp, EmployeeTracker, NoteTaker, PostToSold, TheClassicGenius, WeatherApp];
    let projectImage = projects.filter(project => project.includes(image));

    return (
        <div className="card">
            <img src={projectImage} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title"> {projectID}. {title}</h5>
                <p className="card-text">{description}</p>
                <a href={deployment} className="btn btn-light goThere">Website</a>
                <a href={github} className="btn btn-light goThere">Github Repo</a>
            </div>
        </div>
    )
}

export default Card;