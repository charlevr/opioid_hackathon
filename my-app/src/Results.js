import React, { Component } from 'react';

export class Results extends Component {
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

    click = () => {

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

                <button
                    style={this.getStyle()}
                    onClick={this.click}>

                    <div style={this.getTextStyle()}>
                        Reset
                </div>
                </button>
            </div>
        )
    }
}


export default Results;