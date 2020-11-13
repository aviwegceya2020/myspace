import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { IoMdMenu } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig/firebase';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function Tenants() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [tenants, setTenants] = useState([])

    useEffect(() => {
        db.collection("/tenants")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    const { name, surname, coomNo, contact, email } = doc.data()
                    console.log('Hello', name, surname, coomNo, contact, email);
                    return doc.data()
                });
                // array of cities objects
                setTenants(data)
                return data
            })
            .then(err => console.log(err));
    }, [])
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <h2 className="section-title p-3">Tenants</h2>
            <TableContainer className="table-container" component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Surname</TableCell>
                            <TableCell align="center">Room no</TableCell>
                            <TableCell align="center">Contact no</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tenants.map((tenant) => (
                                <TableRow key={tenant.id}>
                                    <TableCell component="th" scope="row">
                                        {tenant.name}
                                    </TableCell>
                                    <TableCell align="center">{tenant.surname}</TableCell>
                                    <TableCell align="center">{tenant.coomNo}</TableCell>
                                    <TableCell align="center">{tenant.contact}</TableCell>
                                    <TableCell align="center">{tenant.email}</TableCell>
                                    <TableCell align="right"><Button aria-controls="simple-menu"
                                        aria-haspopup="true" onClick={handleClick}>
                                        <IoMdMenu></IoMdMenu></Button></TableCell>
                                </TableRow>
                                
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>View</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
        </>
    );
}