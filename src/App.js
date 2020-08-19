import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Nav';
import Footer from "./components/Footer";
import Wrapper from './components/Wrapper';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import "./index.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/aboutme">
              <About />
            </Route>
            <Route exact path="/">
              <About />
            </Route>
          </Switch>
        </Wrapper>
        <Footer>
        <p style={{textAlign: "center"}}> © Kim Le </p>
          </Footer>
      </div>
    </Router>
  )
};

export default App;
