import React from "react";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
    button : {
        margin: "5px"
    }
}

const DetailsButton = (props) => {
    const {pet} = props;
    return (
        <Link to={"/pets/" + pet._id}>
            <Button variant="contained" color="primary" size="small" style={styles.button}>
                Details
            </Button>
        </Link> 
    )
}
export default DetailsButton;