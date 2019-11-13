import React, { Component } from 'react';

export class MATButton extends Component {
    state = {
        "background": "#FFFFFF",
        "textColor": "black"
    }

    getStyle = () => {
        return {
            width: "160px",
            height: "50px",

            background: this.state.background,
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

            color: this.state.textColor
        }
    }

    click = () => {
        if (!this.props.MATSelected[this.props.text]) {
            this.props.MATSelected[this.props.text] = true
            this.setState({ "background": "#50a7cc" })
            this.setState({ "textColor": "white" })
        } else {
            this.props.MATSelected[this.props.text] = false
            this.setState({ "background": "white" })
            this.setState({ "textColor": "#3F75BC" })
        }

        this.props.updateMATSelected(this.props.MATSelected)
    }

    render() {
        return (
            <button
                style={this.getStyle()}
                onClick={this.click}>

                <div style={this.getTextStyle()}>
                    {this.props.text}
                </div>
            </button>
        )
    }
}


export default MATButton;