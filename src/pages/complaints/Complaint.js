import React from 'react';
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
import Modal from '@material-ui/core/Modal';
import EditComplaint from '../../components/complaints/edit-complaint';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
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

const rows = [
    createData('Frozen yoghurt', 'Aviwe Gceya', 'Pending'),
    createData('Ice cream sandwich', 'Lonwabo Msingelwa', 'Viewed'),
    createData('Eclair', 'Thabo John ', 'Responded'),
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
    const [selectedComplaint, setSelectedComplaint] = React.useState(null);

    const handleModalOpen = () => {
        setOpen(true);
    };
    const handleModalOpenView = (complaint, event) => {
        setOpenView(true);
        setSelectedComplaint(complaint);
    }

    const handleModalOpenEdit = (complaint, event) => {
        setOpenViewEdit(true);
        setSelectedComplaint(complaint);
    }
    const handleModalDelete = (complaint, event) => {
        setOpenDelete(true);
        setSelectedComplaint(complaint);
    }
    const handleModalClose = () => {
        setOpen(false);
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
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-controls="simple-menu"
                                        aria-haspopup="true" onClick={handleClick}>
                                        <IoMdMenu></IoMdMenu>
                                    </IconButton>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={e => handleModalOpenView(row, e)}>View</MenuItem>
                                        <MenuItem onClick={e => handleModalOpenEdit(row, e)}>Edit</MenuItem>
                                        <MenuItem onClick={e => handleModalDelete(row, e) }>Delete</MenuItem>
                                    </Menu>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
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
                onClose={handleModalClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <EditComplaint handleModalOpenEdit={(row) => handleModalOpenEdit(row)}></EditComplaint>
            </Modal>
        
        </>

    );
}
 