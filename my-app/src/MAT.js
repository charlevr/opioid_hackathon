import React, { Component } from 'react';

// My imports
import MATButton from './MATButton.js'
import './MAT.css';

export class MAT extends Component {
    displayMATText = () => {
        return (
            <div>
                <div className="Title">
                    MAT Practitioner Locator
                </div>

                <div className="selectMAT">
                    Select MAT type
                </div>

                <div className="selectMATDescription">
                    Selecting “All” will show practitioners certified in all three MAT types. Select this option if you are unsure of your MAT type.
                </div>
            </div>
        )
    }

    displayMATButtons = () => {
        return (
            <div className="MATButtons">
                <MATButton
                    className="MATButton1"
                    text="Methadone"
                    MATSelected={this.props.MATSelected}
                    updateMATSelected={this.props.updateMATSelected} />

                <MATButton
                    className="MATButton2"
                    text="Naltrexone"
                    MATSelected={this.props.MATSelected}
                    updateMATSelected={this.props.updateMATSelected} />

                <MATButton
                    className="MATButton3"
                    text="Buprenorphine"
                    MATSelected={this.props.MATSelected}
                    updateMATSelected={this.props.updateMATSelected} />

                <MATButton
                    className="MATButton4"
                    text="All"
                    MATSelected={this.props.MATSelected}
                    updateMATSelected={this.props.updateMATSelected} />
            </div>
        )
    }

    render() {
        return (
            <div className="MAT">
                <div className="MATText">
                    {this.displayMATText()}
                </div>

                <div className="MATButtonsWrapper">
                    {this.displayMATButtons()}
                </div>
            </div>
        )
    }
}


export default MAT;