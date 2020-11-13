import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
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

export default function Delete(props) {
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
                Delete Complaint
            </DialogTitle>

            <form className="login-form" noValidate autoComplete="off">
                <DialogContent>
                   Are you sure you want to delete ?
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleModalClose} color="primary">
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" autoFocus onClick={handleModalClose} color="primary">
                        Yes
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}
