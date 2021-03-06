import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import "./create-complaint.css";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
// import { Dialog } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { Button } from '@material-ui/core';
const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        width: 500
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});
const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;

    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function ViewComplaint(props) {
    const { open, onClose } = props;
    const handleModalClose = () => {
        onClose('jjhyy');
    };

    return (
        <Dialog className="form section"
            open={open}
            onClose={handleModalClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
            <DialogTitle id="customized-dialog-title" onClose={handleModalClose}>
                View Complaint
            </DialogTitle>
            <form className="login-form" noValidate autoComplete="off">
                <DialogContent dividers>
                    <TextField label="Tenant name" variant="outlined" type="text" id="name" className="description" /><br /><br />

                    <TextField aria-readonly multiline rowsMax="10" label="Description" variant="outlined" className="description" /><br /><br></br>

                    <TextField aria-readonly multiline rowsMax="10" label="Response" variant="outlined" placeholder="Enter response" className="description" rows="4" cols="4" />


                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleModalClose} color="primary">
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" autoFocus onClick={handleModalClose} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}