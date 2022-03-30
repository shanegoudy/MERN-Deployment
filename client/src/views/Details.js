import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { Paper } from '@material-ui/core';
import axios from "axios";
import AdoptButton from "../components/AdoptButton";

const styles = {
    paper: {
        width: "20rem", padding: "1rem", margin: "auto"
    },
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
        margin: "1px auto 20px auto", width: "50rem", display: "flex", justifyContent: "space-between"
    },
    mainContent: {
        display: "flex", flexDirection:"column", alignItems:"flex-start"
    },
    skills: {
        display: "flex", flexDirection:"row"
    },
    skillsList: {
        display: "flex", flexDirection:"column", alignItems: "baseline", marginLeft: "5px"
    }
}
const Details = (props) => {
    const { id } = useParams();
    const [pet, setPet] = useState({});
    const [pets, setPets] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                console.log('Id: ' + id);
                setPet(res.data);
            })
            .catch((err)=> console.log(err))
    }, [])
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res=> {
                setPets(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    const removeFromDom = petId => {
        setPets(pets.filter(pet => pet._id !== petId))
        
    }
    return (
        <>
        <div style={styles.header}>
            <h1 style={styles.headline}>Pet Shelter</h1>
            <Link to="/">back to home</Link>
        </div>
        <div style={styles.tagline}>
            <h3>Details about: {pet.name}</h3>
            <AdoptButton pet={pet} successCallback={()=>removeFromDom(pet._id)}/>
        </div>
        <Paper elevation={3} style={styles.paper}>
            <div style={styles.mainContent}>
                <p><strong>Pet Type:</strong> {pet.type}</p>
                <p><strong>Description:</strong> {pet.description}</p>
                <div style={styles.skills}>
                    <p><strong>Skills:</strong></p>
                    <div style={styles.skillsList}>
                        <p>{pet.skill_1}</p>
                        <p>{pet.skill_2}</p>
                        <p>{pet.skill_3}</p>
                    </div>
                </div>
            </div>
        </Paper> 
        </>
    )
}
export default Details;