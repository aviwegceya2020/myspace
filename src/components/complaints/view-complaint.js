import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./create-complaint.css";
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
export default function ViewComplaint() {
  
    return (
        <section className="form section">

            <form className="login-form" noValidate autoComplete="off">
                <h2 className="section-title">View Complaint</h2>
                <div className="form-control">
                    <label htmlFor="tenant-name">name</label>
                    <TextField
                        type="text"
                        id="tenant-name">
                    </TextField>
                    <label htmlFor="complaint">complaint</label>
                    <textarea className="description" rows="4" cols="4">
                    </textarea>
                </div>
                <div className="buttons">
                    <button type="submit"
                        className="btn btn-primary">
                        Cancel
                    </button>
                    &nbsp;
                    <button type="submit"
                        className="btn btn-primary ml-2">
                        Update
                    </button>
                </div>
            </form>
        </section>
    )
}