import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InstanceBody from './InstanceBody';

function Instances(props) {

  return (
    <Card className="summary">
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
                    <InstanceBody {...props}></InstanceBody>
                </Table>
            </TableContainer>
        </CardContent>
    </Card>
  );
}

export default Instances;
