import React from 'react';
import Nav from "./components/Nav";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Nav />
      </Router>
    </div>
  );
}

export default App;
