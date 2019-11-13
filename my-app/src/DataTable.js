import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// function createData(prefix, name, deg, address, city, postalCode, tele, fax) {
//     return { prefix, name, deg, address, city, postalCode, tele, fax };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export class DataTable extends Component {
    getRootStyle = () => {
        return {
            width: '100%',
            overflowX: 'auto',
        }
    }

    getTableStyle = () => {
        return {
            minWidth: 650,

            position: "absolute",
            width: "1209px",
            height: "747px",
            left: "122px",
            top: "692px",

            background: "#FFFFFF",
            /* Gray 6 */

            border: "1px solid #E0E0E0",
            boxSizing: "border-box",

            borderRadius: "5px"
        }
    }

    getHeaderStyle = () => {
        return {
            fontWeight: "bold"
        }
    }

    render() {
        return (
            <Paper style={this.getRootStyle()}>
                <Table style={this.getTableStyle()} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><div style={this.getHeaderStyle()}>Prefix</div></TableCell>
                            <TableCell align="right"><div style={this.getHeaderStyle()}>Name</div></TableCell>
                            <TableCell align="right"><div style={this.getHeaderStyle()}>Deg.</div></TableCell>
                            <TableCell align="right"><div style={this.getHeaderStyle()}>Address</div></TableCell>
                            <TableCell align="right"><div style={this.getHeaderStyle()}>City</div></TableCell>
                            <TableCell align="right"><div style={this.getHeaderStyle()}>Postal Code</div></TableCell>
                            <TableCell align="right"><div style={this.getHeaderStyle()}>Tele</div></TableCell>
                            <TableCell align="right"><div style={this.getHeaderStyle()}>Fax</div></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.data.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.prefix}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.deg}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.city}</TableCell>
                                <TableCell align="right">{row.postalCode}</TableCell>
                                <TableCell align="right">{row.tele}</TableCell>
                                <TableCell align="right">{row.fax}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default DataTable;