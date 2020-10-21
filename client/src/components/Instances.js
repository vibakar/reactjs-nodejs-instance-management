import React, { useEffect } from "react";
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

function Instances(props) {

    useEffect(()=> {
        console.log(props.costFormat, '---ins cost format---');
    }, [props.costFormat])

    const getEntity = () => {
        return props.costFormat === 'usd' ? String.fromCharCode(36) : String.fromCharCode(8377);
    }

    const getCost = (cost) => {
        var usdPerRup = 0.015;
        return (props.costFormat === 'usd') ? cost : (cost/usdPerRup).toFixed(2);
    }

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
                        {props.instances && props.instances.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">
                                   <span>{getEntity()}</span> <span>{getCost(row.costPerHour)}</span>
                                </TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                                <TableCell align="center">{row.status.toLowerCase() === 'running' ? 'stop' : 'start'}</TableCell>
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
