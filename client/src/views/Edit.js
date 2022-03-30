import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Form from '../components/Form';

const styles = {
    headline: {
        margin: "0"
    },
    header: {
        margin: "auto auto 1px auto", width: "50rem", display: "flex", justifyContent: "space-between", alignItems: "baseline"
    },
    tagline: {
        margin: "1px auto 20px auto", width: "50rem", display: "flex", justifyContent: "left"
    }
}

const Edit = (props) => {
    const { id } = useParams();
    const [pet, setPet] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                console.log('Id: ' + id);
                setPet(res.data);
                setLoaded(true);
            })
    }, [])
    const updatePet = (pet) => {
        axios.put('http://localhost:8000/api/pets/' + id, pet)
        .then(res => {
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch( err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }
    return (
        <div>
            <div style={styles.header}>
            <h1 style={styles.headline}>Pet Shelter</h1>
            <Link to="/">back to home</Link>
        </div>
        <h3 style={styles.tagline}>Edit details for {pet.name}</h3>
            {loaded && (
                <Form
                    onSubmitProp={updatePet}
                    initialName={pet.name}
                    initialType={pet.type}
                    initialDescription={pet.description}
                    initialSkill_1={pet.skill_1}
                    initialSkill_2={pet.skill_2}
                    initialSkill_3={pet.skill_3}
                    errors = {errors}
                />
            )}
        </div>
    )
}

export default Edit;