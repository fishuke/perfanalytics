import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function TableComponent(props: { data: Report[] }) {
    const resources: Resource[] = [];
    props.data.forEach(data => {
        resources.push(...data.resources);
    });

    return (
        <TableContainer data-testid="table" component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Url</TableCell>
                        <TableCell align="right">Initiator Type</TableCell>
                        <TableCell align="right">Transfer Size</TableCell>
                        <TableCell align="right">Duration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {resources.map((row) => (
                        <TableRow
                            key={resources.indexOf(row)}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.initiatorType}</TableCell>
                            <TableCell align="right">{row.transferSize}</TableCell>
                            <TableCell align="right">{row.duration}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}