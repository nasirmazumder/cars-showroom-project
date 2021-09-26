import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ShowCars from '../ShowCars/ShowCars';
import './Cars.css'
const Cars = (props) => {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./cars.json')
            .then(res => res.json())
            .then(data => setCars(data))

    }, [])

    const handleBuyNow = product => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div>
            <h1 className="loaded-cars">Total Loaded Cars : {cars.length}</h1>
            <div className="shop-container">

                <div className="cars-container">

                    {
                        cars.map(car => <ShowCars
                            key={car.name}
                            car={car}
                            handleBuyNow={handleBuyNow}

                        ></ShowCars>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Cars;
