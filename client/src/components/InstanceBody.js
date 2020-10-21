import React from "react";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function InstanceBody(props) {
    const getEntity = () => {
        return props.costFormat === 'usd' ? String.fromCharCode(36) : String.fromCharCode(8377);
    }

    const getCost = (cost) => {
        var usdPerRup = 0.015;
        return (props.costFormat === 'usd') ? cost : (cost/usdPerRup).toFixed(2);
    }
    
    return (
        <TableBody>
            {props.instances && props.instances.map((row) => (
                <TableRow key={row.id}>
                    <TableCell component="th" scope="row">{row.id}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">
                        <span>{getEntity()}</span> <span>{getCost(row.costPerHour)}</span>
                    </TableCell>
                    <TableCell align="center">
                        <span className={row.status.toLowerCase() === "stopped" ? "text-danger" : ""}>{row.status}</span>
                    </TableCell>
                    <TableCell align="center">
                        <span className={row.status.toLowerCase() === "running" ? "status-action text-danger" : "status-action"} onClick={() => props.handleAction(row.status, row.id)}>
                            {row.status.toLowerCase() === "running" ? "stop" : "start"}
                        </span>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}

export default InstanceBody;