import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";
import Directory from './components/DirectoryComponent';
import { LANGUAGES } from './shared/languages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: LANGUAGES
    };
  }
  render() {
    return (
      <div>
        <Navbar className="App">
          <div>
          <img className="w-25" src="assets/images/portrait.jpg" />
            <NavbarBrand href="/">Dan Beto</NavbarBrand>
          </div>
        </Navbar>
        <Directory />
      </div>
      
    );
  }
}

export default App;
