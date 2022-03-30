import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { useNavigate, Link } from 'react-router-dom';

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

const New = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const createPet = (petParam) => {
        axios.post('http://localhost:8000/api/pets', petParam)
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch( err => {
                console.log(err.response.data.errors)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
    return (
        <>
        <div style={styles.header}>
            <h1 style={styles.headline}>Pet Shelter</h1>
            <Link to="/">back to home</Link>
        </div>
        <h3 style={styles.tagline}>Know a pet needing a home?</h3>
        <Form onSubmitProp={createPet} initialName="" initialType="" initialDescription="" initialSkill_1="" initialSkill_2="" initialSkill_3="" errors={errors}/>
        </>
    )
}
export default New;