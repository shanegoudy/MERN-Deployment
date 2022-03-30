import React from "react";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
    button : {
        width: "100%",
    }
}

const EditButton = (props) => {
    const {pet} = props;
    return (
        <Link to={"/pets/" + pet._id + "/edit"}>
            <Button variant="contained" color="primary" size="small">
                Edit
            </Button>
        </Link> 
    )
}
export default EditButton;