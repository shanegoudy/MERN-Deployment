import React from "react";
import axios from 'axios';
import { Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

const styles = {
    button : {
        margin: "5px"
    }
}

const AdoptButton = (props) => {
    const navigate = useNavigate();
    const { successCallback, pet} = props;
    const adoptPet = (e) => {
        axios.delete('http://localhost:8000/api/pets/' + pet._id)
            .then(res => {
                successCallback();
                navigate("/");
            })
            .catch(err => console.log(err))
    }
    return (
        <Button onClick={adoptPet} variant="contained" color="primary" size="small" style={styles.button}>
            Adopt {pet.name}
        </Button>
    )
}
export default AdoptButton;