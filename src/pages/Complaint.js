// import React from 'react'

// export default function Complaint() {

//     return (
//         <section className="form section">
//             <h2 className="section-title">Complaints</h2>
//             {/* <form className="login-form">
//                 <div className="form-control">
//                     <label htmlFor="complaint">complaint</label>
//                     <input
//                         type="text"
//                         id="complaint">
//                     </input>
//                 </div>
//                 <div className="form-control">
//                     <label htmlFor="room">room</label>
//                     <input
//                         type="text"
//                         id="room">
//                     </input>
//                 </div>
//                 <div className="form-control">
//                     <label htmlFor="building">building</label>
//                     <div></div>
//                     <select>
//                         <option selected value="propella">Propella</option>
//                         <option value="devhub">Dev hub</option>
//                         <option value="engeli">Engeli</option>
//                     </select>
//                     <input
//                         type="text"
//                         id="building">
//                     </input>
//                 </div>
//                 <button type="submit"
//                     className="btn btn-block btn-primary">
//                     Submit
//                 </button>

//             </form> */}



//         </section>
//     )
// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Complaint() {
    const classes = useStyles();

    return (
        <>
            <h2 className="section-title p-3">Complaints</h2>
            <TableContainer className="table-container" component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
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
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
