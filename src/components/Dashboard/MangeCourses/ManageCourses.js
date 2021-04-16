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
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const useStyles = makeStyles({
    table: {
        minWidth: 200,
    },
});

const ManageCourses = () => {
    const classes = useStyles();
    const [allCourses, setAllCourses] = useState([]);
    const [deleted, setDeleted] = useState(false);
    const rows = allCourses;
    useEffect(() => {
        fetch('http://localhost:8888/allCourses')
        .then(res => res.json())
        .then(data => setAllCourses(data));
    }, [deleted]);
    
    const deleteProduct = (id) => {
        fetch(`http://localhost:8888/deleteCourse/${id}`, {
            method: 'delete'
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("Product is deleted successfully");
                setDeleted(!deleted);
            }
            else{
                alert("Not Deleted");
            }
        })
    }

    return (
        <div className="dashboard-container">
            <DashboardNav></DashboardNav>
            <div className="checkout-container">
            <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Course Name</TableCell>
                                        <TableCell align="right">Fee</TableCell>
                                        <TableCell align="right">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.title}
                                            </TableCell>
                                            <TableCell align="right">${row.fee}</TableCell>
                                            <TableCell align="right"><DeleteForeverIcon className="deleteIcon" color="secondary" onClick={() => deleteProduct(row._id)}/></TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

            </div>
        </div>
    );
};

export default ManageCourses;