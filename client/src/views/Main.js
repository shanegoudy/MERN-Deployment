import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayAll from '../components/DisplayAll';

const Main = () => {
    const [petList, setPetList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                setPetList(res.data)
            })
            .catch((err)=>console.log(err))
    }, [])
    const removeFromDom = petId => {
        axios.delete("http://localhost:8000/api/pets" + petId)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setPetList(petList.filter(pet => pet._id !== petId));
        })
        .catch((err)=>console.log(err))
    }
    const createPet = (petParam) => {
        axios.post('http://localhost:8000/api/pets', petParam)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setPetList([...petList, res.data]);
            })
            .catch((err)=> console.log(err))
    }
    return (
        <div>
            <DisplayAll petList={petList} removeFromDom={removeFromDom} />
        </div>
    )
}
export default Main;