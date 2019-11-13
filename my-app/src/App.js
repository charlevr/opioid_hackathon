import React from 'react';
import './App.css';
import { Component } from 'react';

// My imports
import MAT from './MAT.js'
import Location from './Location.js'
import Results from './Results.js'

export class App extends Component {

  state = {
    MATSelected: {
      "Methadone": false,
      "Naltrexone": false,
      "Buprenorphine": false,
      "All": false
    },

    location: {
      "Postal Code": "",
      "City": "",
      "Location": "",
    }
  }

  updateMATSelected = (selected) => {
    this.setState({ MATSelected: selected })
  }

  updateLocation = (l) => {
    this.setState({ location: l })
  }

  retrieveAllInput = () => {
    console.log(this.state.MATSelected)

  }

  render() {
    return (
      <div className="App">
        <div className="MAT">
          <MAT
            MATSelected={this.state.MATSelected}
            updateMATSelected={this.updateMATSelected} />
        </div>

        <div className="Location">
          <Location
            location={this.state.location}
            updateLocation={this.updateLocation} />
        </div>

        <div className="Results">
          <Results />
        </div>
      </div>
    )
  }
}
export default App;
