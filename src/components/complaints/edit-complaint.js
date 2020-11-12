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
export default function EditComplaint(props) {

    const {row} = props
    // const classes = useStyles();
    // const [value, setValue] = React.useState('Controlled');

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };

    console.log('hello ' + row);
    return (
        <section className="form section">

            <form className="login-form" noValidate autoComplete="off">
                <h2 className="section-title">Edit Complaint</h2>
                <div className="form-control">
                    <label htmlFor="complaint">complaint</label>
                    {/* <TextField
                        id="standard-multiline-flexible"
                        label="Multiline"
                        multiline
                        rowsMax={4}
                        // value={value}
                        // onChange={handleChange}
                    /> */}
                    <textarea className="description" rows="4" cols="4"
                        placeholder="Enter complaint here">

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
                        Save
                    </button>

                </div>


            </form>
        </section>
    )
}
