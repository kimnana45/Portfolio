import React, { Component } from 'react';
import Projects from '../utils/projects.json';
import { Container, Row } from '../components/Grid';
import CardDeck from '../components/CardDeck';
import Card from '../components/Card';

class Portfolio extends Component {
    state = { Projects };

    render() {
        return (
            <Container>
                <Row>
                    <Row>
                        <Col size="sm-12">
                            <h2 className="accented">A few of my creations</h2>
                        </Col>
                    </Row>
                    <CardDeck>
                        {this.state.Projects.filter(item => item.id <= 2)
                            .map(project => (
                                <Card 
                                    key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    description={project.description}
                                    github={project.github}
                                    deployment={project.deployment}
                                    image={project.image}
                                />
                        ))}
                    </CardDeck>
                </Row>
                <Row>
                    <CardDeck>
                        {this.state.Projects.filter(item => item.id > 2 && item.id <= 4)
                            .map(project => (
                                <Card 
                                    key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    description={project.description}
                                    github={project.github}
                                    deployment={project.deployment}
                                    image={project.image}
                                />
                        ))}
                    </CardDeck>
                </Row>
                <Row>
                    <CardDeck>
                        {this.state.Projects.filter(item => item.id > 4)
                            .map(project => (
                                <Card 
                                    key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    description={project.description}
                                    github={project.github}
                                    deployment={project.deployment}
                                    image={project.image}
                                />
                        ))}
                    </CardDeck>
                </Row>
            </Container>
           ) 
    }
};

export default Portfolio;