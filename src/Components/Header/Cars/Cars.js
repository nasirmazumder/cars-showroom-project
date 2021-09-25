import React, { useEffect, useState } from 'react';
import ShowCars from '../ShowCars/ShowCars';
import './Cars.css'
const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('./cars.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className="cars">
            {
                cars.map(car => console.log(car))
            }
            {
                cars.map(car => <ShowCars
                    key={car.name}
                    car={car.name}
                    img={car.img}
                ></ShowCars>)
            }
        </div>
    );
};

export default Cars;