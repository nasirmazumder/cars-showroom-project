import React from 'react';
import './ShowCars.css'
const ShowCars = (props) => {
    console.log(props.name)
    return (
        <div>
            <img src={props.img} alt="" />
            <h1>Name: {props.car}</h1>
        </div>
    );
};

export default ShowCars;