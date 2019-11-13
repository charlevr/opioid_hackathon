import React, { Component } from 'react';

export class LocationButton extends Component {
    state = {
        value: ""
    }

    getStyle = () => {
        return {
            width: "160px",
            height: "50px",

            background: "#FFFFFF",
            /* Gray 5 */

            border: "1px solid #E0E0E0",
            boxSizing: "border-box",
            borderRadius: "5px",
        }
    }

    change = (event) => {
        // this.setState({ value: event.target.value })
        this.props.location[this.props.name] = event.target.value
        // console.log(this.props.location)
    }

    render() {
        return (
            <div>
                {this.props.name}

                <form>
                    <input
                        type="text"
                        name="name"
                        style={this.getStyle()}
                        onChange={(event) => this.change(event)} />
                </form>

            </div>
        )
    }
}


export default LocationButton;