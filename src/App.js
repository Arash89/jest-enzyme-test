import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ArashPanel from './components/arashPanel';
class App extends Component {

  constructor() {
    super();
    this.alertMessage = "Salam";
    this.customAlert = this.customAlert.bind(this);
  }

  customAlert() {
    alert(this.alertMessage);
  }

  render() {
    return (
      <div className="App">
        <h1>In the Name of GOD</h1>
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4">
            <ArashPanel title="Salam" body="This is the Body text." customAlert={this.customAlert}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
