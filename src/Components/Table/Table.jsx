import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Label from './Label';
import { rows } from './TableInfo'

export default function BasicTable({name}) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', flex: '30%'}}>
        <Label name={name}/>
        <TableContainer component={Paper}>
            <Table sx={{border: '1px solid grey' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Username</TableCell>
                        <TableCell align="right">Profit($)</TableCell>
                        <TableCell align="right">Comisson($)</TableCell>
                        <TableCell align="right">View</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.username}</TableCell>
                                <TableCell align="right">{row.profits}</TableCell>
                                <TableCell align="right">{row.commison}</TableCell>
                                <TableCell align="right">{row.view}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}
