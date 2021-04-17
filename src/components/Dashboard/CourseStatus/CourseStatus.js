import React, { useEffect, useState } from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import StatusUpdate from './StatusUpdate';


const useStyles = makeStyles({
    table: {
        minWidth: 250,
    },
});

const CourseStatus = () => {
    
    const classes = useStyles();
    const [allStudents, setAllStudents] = useState([]);
    const rows = allStudents;
    useEffect(() => {
        fetch('https://nextlevel1.herokuapp.com/allStudents')
            .then(res => res.json())
            .then(data => setAllStudents(data));
    }, []);

    return (
        <div className="dashboard-container">
            <DashboardNav></DashboardNav>
            <div className="checkout-container">
                <h4>Change Course Status</h4>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Course Name</TableCell>
                                <TableCell align="right">Student Mail</TableCell>
                                <TableCell align="right">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row">
                                        {row.courseTitle}
                                    </TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">
                                        <StatusUpdate key={row._id} id={row._id} courseStatus={row.courseStatus}></StatusUpdate>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </div>
    );
};

export default CourseStatus;