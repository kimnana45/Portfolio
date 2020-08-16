import React from "react";
import { Container, Row, Col } from "../components/Grid";
import image from "../assets/IMG_E1205.png";

const About = () => {
    return (
        <Container>
            <Row>
                <Col size="sm-12">
                    <h2>PEOPLE DIE WHEN CURIOSITY GOES -Graham Swift</h2>
                </ Col>
                <Col size="sm-10">
                    <h3>May we never stop being curious</h3>
                </ Col>
            </ Row>
            <Row id="about-me">
                <Col size="sm-6">
                    <img src={image} alt="Profile picture" className="img-thumbnail" />
                </ Col>
                <Col className="col-sm-4">
                    <br />
                    <br />
                    <br />
                    <h2 className="accented">Hello!</h2>
                    <br />
                    <p id="introduction">My name is Kim Le. I love to travel, seeing new places, experience new cultures,
                        eating good food, drinking good wine, and creating good vibes. <br />
                        My professional backgorund is hospitality. I have over 7 years of experience: ranging from hotel & resort
                        to food & beverage. <br />
                        Recently, I've embarked on a new adventure into the world of coding.
                        It's been fun, I've learn a ton, grow a bit, and created a few cool things. <br />
                        I look forward to honing my skills, expanse my knowledge in this field and build more applications.
                    </p>
                </ Col>
            </ Row>
        </Container>
    )
}

export default About;