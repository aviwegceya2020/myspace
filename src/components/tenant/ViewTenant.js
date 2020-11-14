import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
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

export default function ViewTenant(props) {
    const { open, onClose, tenant } = props;
    const handleModalClose = () => {
        onClose('jjhyy');
    };

    const { name, surname, coomNo, contact, email } = tenant
    
    console.log(tenant);

    return (
        <Dialog className="form section"
            open={open}
            onClose={handleModalClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
            <DialogTitle id="customized-dialog-title" onClose={handleModalClose}>
                Tenant
            </DialogTitle>
            <form className="login-form" noValidate autoComplete="off">
                <DialogContent dividers key={tenant.id}>
                    <TextField label="Tenant name" variant="outlined" type="text" id="name" className="description" value={tenant.name +" "+tenant.surname} /><br /><br />

                    <TextField aria-readonly multiline rowsMax="10" label="Room number" variant="outlined" className="description" value={tenant.coomNo}/><br /><br></br>

                    <TextField aria-readonly multiline rowsMax="10" label="Email" variant="outlined" value={tenant.email} className="description" cols="4" /><br /><br></br>
                    <TextField aria-readonly multiline rowsMax="10" label="Contact" variant="outlined"  value={tenant.contact} className="description" cols="4" />


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