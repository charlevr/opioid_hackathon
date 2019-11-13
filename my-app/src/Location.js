import React, { Component } from 'react';

// My imports
import LocationButton from './LocationButton.js'
import './Location.css'

export class Location extends Component {
    state = {

    }

    displayButtons = () => {
        return (
            <div className="buttons">
                <LocationButton
                    name="Postal Code"
                    className="button1"
                    location={this.props.location}
                    updateLocation={this.props.updateLocation} />

                <LocationButton
                    name="City"
                    className="button2"
                    location={this.props.location}
                    updateLocation={this.props.updateLocation} />

                <LocationButton
                    name="Location"
                    className="button3"
                    location={this.props.location}
                    updateLocation={this.props.updateLocation} />
            </div>
        )
    }

    render() {
        return (
            <div className="Location">
                {this.displayButtons()}
            </div>
        )
    }
}


export default Location;