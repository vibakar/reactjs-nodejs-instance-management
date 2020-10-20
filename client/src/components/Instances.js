import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(id, instanceName, costPerHour, status) {
    return { id, instanceName, costPerHour, status };
  }
  
  const rows = [
    createData(1, 't2.micro', 0.85, 'stopped'),
    createData(2, 't2.large', 9.0, 'running'),
    createData(3, 't2.micro', 16.0, 'stopped'),
    createData(4, 't2.nano', 13.67, 'stopped'),
    createData(5, 't2.large', 16.0, 'running'),
    createData(6, 't2.nano', 14.0, 'stopped'),
    createData(7, 't2.large', 9.0, 'stopped')
  ];

function Instances() {
  return (
    <Card  className="summary">
        <CardContent>
            <Typography className="table-heading" gutterBottom>
                Instances
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead className="table-head">
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="center">Instance Name</TableCell>
                            <TableCell align="center">Cost Per Hour</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                        </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell align="center">{row.instanceName}</TableCell>
                                <TableCell align="center">{row.costPerHour}</TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                                <TableCell align="center">{row.status === 'running' ? 'stop' : 'start'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </CardContent>
    </Card>
  );
}

export default Instances;
