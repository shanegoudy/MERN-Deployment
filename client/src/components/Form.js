import React, { useState } from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
    Label
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
    paper: {
        width: "50rem", padding: "1rem", margin: "auto"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        margin: "5px"
    },
    fields: {
        display: "flex", flexDirection:"row", alignItems:"flex-start"
    },
    namefields: {
        display: "flex", flexDirection:"column", margin: "0 30px 0 0"
    }
}

const Form = (props) => {
    const { initialName, initialType, initialDescription, initialSkill_1, initialSkill_2, initialSkill_3, onSubmitProp, errors} = props;
    const [name, setName] = useState(initialName);
    const [type, setType] = useState(initialType);
    const [description, setDescription] = useState(initialDescription);
    const [skill_1, setSkill_1] = useState(initialSkill_1);
    const [skill_2, setSkill_2] = useState(initialSkill_2);
    const [skill_3, setSkill_3] = useState(initialSkill_3);
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        onSubmitProp({ name, type, description, skill_1, skill_2, skill_3 });
    }
    return (
        <Paper elevation={3} style={styles.paper}>
            <form onSubmit={onSubmitHandler}>
                <div style={styles.fields}>
                    <div style={styles.namefields}>
                        <FormControl variant="outlined" style={styles.input}>
                            <p>Pet Name</p>
                            <OutlinedInput type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </FormControl>
                        <br/>
                        <FormControl variant="outlined" style={styles.input}>
                            <p>Pet Type:</p>
                            <OutlinedInput type="text" name="type" value={type} onChange={(e) => setType(e.target.value)}/>
                        </FormControl>
                        <br/>
                        <FormControl variant="outlined" style={styles.input}>
                            <p>Pet Description</p>
                            <OutlinedInput type="textarea" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </FormControl>
                        <Button type="submit" variant="contained" color="primary" style={styles.button}>
                            Submit
                        </Button>
                        {errors.map((err, index) => <p key={index}>{err}</p>)}
                    </div>
                    <div style={styles.skillfields}>
                        <p>Skills (optional):</p>
                        <p>Skill 1:</p>
                        <FormControl variant="outlined" style={styles.input}>
                            <OutlinedInput type="textarea" name="skill_1" value={skill_1} onChange={(e) => setSkill_1(e.target.value)}/>
                        </FormControl>
                        <br/>
                        <p>Skill 2:</p>
                        <FormControl variant="outlined" style={styles.input}>
                            <OutlinedInput type="textarea" name="skill_2" value={skill_2} onChange={(e) => setSkill_2(e.target.value)}/>
                        </FormControl>
                        <br/>
                        <p>Skill 3:</p>
                        <FormControl variant="outlined" style={styles.input}>
                            <OutlinedInput type="textarea" name="skill_3" value={skill_3} onChange={(e) => setSkill_3(e.target.value)}/>
                        </FormControl>
                    </div>
                </div>
            </form>
        </Paper>
    )
}

export default Form;