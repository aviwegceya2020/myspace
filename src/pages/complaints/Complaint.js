import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IoMdMenu } from 'react-icons/io';
import CreateComplaint from "../../components/complaints/create-complaint"
import ViewComplaint from "../../components/complaints/view-complaint"
import EditComplaint from "../../components/complaints/edit-complaint"
import Modal from '@material-ui/core/Modal';


// function createData(name, description, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }
const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,

    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const complaints = [
    { id: '1', description: 'Shower', name: 'Lloyd', status: 'viewed' }
];
//Start Modal
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


//End modal

export default function Complaint() {
    const complaints = [
        { id: '1', description: 'Shower', name: 'Lonwabo', status: 'viewed' },
        { id: '2', description: 'Kitchen', name: 'Aviwe', status: 'Responded' }
    ];

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    //Start Modal
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    const [open, setOpen] = React.useState(false);
    const [openView, setOpenView] = React.useState(false);
    const [openEdit, setOpenViewEdit] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [selectedComplaint, setSelectedComplaint] = React.useState();
    const [complaint, setcomplaint] = useState('')

    const handleModalOpen = () => {
        setOpen(true);
    };
    const handleModalOpenView = (complaint, event) => {
        setOpenView(true);
    };

    const handleModalOpenEdit = (complaint, event) => {
        setOpenViewEdit(true);

    };
    const handleModalDelete = (complaint, event) => {
        setOpenDelete(true);
        setSelectedComplaint(selectedComplaint);
    };
    const handleModalClose = () => {
        setOpen(false);
    };
    const handleModalCloseView = (complaint, event) => {
        setOpenView(false);
    };
    const handleModalCloseEdit = (complaint, event) => {
        setOpenViewEdit(false);

    };

    //End Modal


    return (
        <>

            <h2 className="section-title ">Complaints</h2>
            <div className="new-button">
                <Button aria-controls="simple-menu" color="primary" variant="contained"
                    aria-haspopup="true" onClick={handleModalOpen}>
                    Add
                </Button>

            </div>

            <TableContainer className="table-container" component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell align="right">Tenant name</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {complaints.map((complaint) => (
                            <TableRow key={complaint.id}>
                                <TableCell component="th" scope="row">
                                    {complaint.description}
                                </TableCell>
                                <TableCell align="right">{complaint.name}</TableCell>
                                <TableCell align="right">{complaint.status}</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-controls="simple-menu"
                                        aria-haspopup="true" onClick={handleClick}>
                                        <IoMdMenu></IoMdMenu>
                                    </IconButton>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        complaints={complaints}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={e => handleModalOpenView(complaint, e)}>View</MenuItem>
                                        <MenuItem onClick={e => handleModalOpenEdit(complaint, e)}>Edit</MenuItem>
                                        <MenuItem onClick={e => handleModalDelete(complaint, e)}>Delete</MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <CreateComplaint open={open} onClose={handleModalClose}></CreateComplaint>
            <ViewComplaint open={openView} onClose={handleModalCloseView}></ViewComplaint>
            <EditComplaint open={openEdit} onClose={handleModalCloseEdit}></EditComplaint>
            {/* <Modal
                open={open}
                onClose={handleModalClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >

                <CreateComplaint></CreateComplaint>
            </Modal>
            <Modal
                open={openView}
                onClose={handleModalClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >

                <ViewComplaint></ViewComplaint>
            </Modal>
            <Modal
                open={openEdit}
                complaints={complaint}
                onClose={handleModalClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >

                <EditComplaint complaints={complaint}></EditComplaint>
            </Modal> */}

            <Modal
                open={openEdit}
                onClose={handleModalClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <EditComplaint handleModalOpenEdit={(row) => handleModalOpenEdit(row)}></EditComplaint>
            </Modal>
        
        </>

    );
}
 