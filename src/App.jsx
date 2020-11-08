import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css'
import "./App.css";
import Dashboard from "./events/Dashboard";
import Navbar from "./Navbar";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Container className='main'>
          <Dashboard/>
        </Container>
        
      </div>
    );
    }
}

export default App;

