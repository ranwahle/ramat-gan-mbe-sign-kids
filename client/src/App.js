import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegistrationForm from "./registration-form/registration-form";

class App extends Component {
  render() {
    return (
      <div className="App">

          <RegistrationForm></RegistrationForm>
      </div>
    );
  }
}

export default App;
