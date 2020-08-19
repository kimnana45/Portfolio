import React from "react";
import image from "../assets/IMG_E1205.png";

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h2>PEOPLE DIE WHEN CURIOSITY GOES -Graham Swift</h2>
                </div>
                <div className="col-sm-10">
                    <h3>May we never stop being curious</h3>
                </div>
            </div>
            <div className="row" id="about-me">
                <div className="col-sm-6">
                    <img src={image} alt="Profile picture" className="img-thumbnail" />
                </div>
                <div className="col-sm-4">
                    <h2 className="accented">Hello!</h2>
                    <p id="introduction">My name is Kim Le. I love to travel, seeing new places, experience new cultures,
                    eating good food, drinking good wine, and creating good vibes.
                    My professional backgorund is hospitality. I have over 7 years of experience: ranging from hotel & resort
                    to food & beverage.
                    Recently, I've embarked on a new adventure into the world of coding.
                    It's been fun, I've learn a ton, grow a bit, and created a few cool things.
                    I look forward to honing my skills, expanse my knowledge in this field and build more applications.
                    </p>
                </div>
            </div>
            <div className="row">
        <div className="col-sm-10">
          <h2>Logic will get you from A to B.</h2>
          <h3>Imagination will take you everywhere -Einstein</h3>
        </div>
      </div>
        </div>
    )
}

export default About;