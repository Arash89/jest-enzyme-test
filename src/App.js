import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ArashGet, ArashGet2, ArashGet3 } from './utils/arashUtil';
import { generatorBasics } from './utils/arashGenerators'

import ArashPanel from './components/arashPanel';
class App extends Component {

  constructor() {
    super();
    this.alertMessage = "Salam";
    this.customAlert = this.customAlert.bind(this);
    this.setRecords = this.setRecords.bind(this);
    this.state = {
      records:[]
    };
  }

  customAlert() {
    alert(this.alertMessage);
  }

  setRecords(records) {
    this.setState({records});
    ArashGet2(1).then(data => console.log("ArashGet2:", data));
  }

  renderRecords(records) {
    return records.map(
      record => {
        return (<li key={record.id}>
          {`${record.first_name} ${record.last_name}`}
        </li>);
      }
    );
  }

  componentDidMount() {
    ArashGet3([1, 2, 3], this.setRecords);
    const iterantor = generatorBasics();
    console.log('Frist return:', iterantor.next().value);
    console.log('Second return:', iterantor.next().value);
    console.log('Third return:', iterantor.next().value);
    console.log('Fourth return:', iterantor.next().value);
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
        <div>
          <ol>{this.renderRecords(this.state.records)}</ol>
        </div>
      </div>
    );
  }
}

export default App;
