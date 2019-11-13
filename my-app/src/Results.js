import React, { Component } from 'react';

// My imports
import DataTable from './DataTable';

export class Results extends Component {
    state = {
        headers: [],
        data: [{
            "prefix": "dr.", "name": "ackerman",
            "deg": "dr.", "address": "1910 pioneer way",
            "city": "asdfsdf", "postalCode": "2345",
            "tele": "999", "fax": "l234k23r",
        },
        {
            "prefix": "dr.", "name": "ackerman",
            "deg": "dr.", "address": "1910 pioneer way",
        }]
    }

    getStyle = () => {
        return {

            position: "absolute",
            width: "160px",
            height: "50px",
            left: "122px",
            top: "491px",

            background: "#FFFFFF",
            /* Gray 6 */

            border: "1px solid #F2F2F2",
            boxSizing: "border-box",

            /* Button Shadow */

            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)",
            borderRadius: "5px"
        }
    }

    getTextStyle = () => {
        return {
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "19px",
            /* identical to box height */

            textAlign: "center",

            /* Blue */

            color: "#3F75BC"
        }
    }

    applyClick = () => {
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <button
                    style={this.getStyle()}
                    onClick={this.click}>

                    <div style={this.getTextStyle()}>
                        Apply
                </div>
                </button>

                {/* <button
                    style={this.getStyle()}
                    onClick={this.click}>

                    <div style={this.getTextStyle()}>
                        Reset
                </div>
                </button> */}

                <DataTable
                    data={this.state.data} />

            </div>
        )
    }
}


export default Results;