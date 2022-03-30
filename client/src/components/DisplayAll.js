import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditButton from './EditButton';
import DetailsButton from './DetailsButton';
import {
    Paper,
    Table,
    TableRow,
    TableCell,
    TableHead
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
    headline: {
        margin: "0"
    },
    paper: {
        width: "50rem", padding: "1rem", margin: "auto"
    },
    header: {
        margin: "auto auto 1px auto", width: "50rem", display: "flex", justifyContent: "space-between", alignItems: "baseline"
    },
    tagline: {
        margin: "1px auto 20px auto", width: "50rem", display: "flex", justifyContent: "left"
    }
}


const DisplayAll = (props) => {
    const [pets, setPets] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:8000/api/pets')
            .then(res => setPets(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
        <div style={styles.header}>
            <h1 style={styles.headline}>Pet Shelter</h1>
            <Link to="/pets/new">add a pet to the shelter</Link>
        </div>
        <h3 style={styles.tagline}>These pets are looking for a good home</h3>
        <Paper elevation={3} style={styles.paper}>
            <Table>
                <TableRow>
                    <TableCell><TableHead>Name</TableHead></TableCell>
                    <TableCell><TableHead>Type</TableHead></TableCell>
                    <TableCell><TableHead>Action</TableHead></TableCell>
                </TableRow>
                {pets.map((pet, index) => {
                    return (
                        <>
                        <TableRow key={index}>
                            <TableCell>
                                <Link to={"/pets/" + pet._id}>{pet.name}</Link>
                            </TableCell>
                            <TableCell>{pet.type}</TableCell>
                            <TableCell>
                                <DetailsButton pet={pet}/>
                                <EditButton pet={pet}/>
                            </TableCell>
                        </TableRow>
                        </>
                    )
                })}
            </Table>
        </Paper>
        </>
    )
}

export default DisplayAll;