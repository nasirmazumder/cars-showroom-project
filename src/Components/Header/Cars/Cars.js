import React, { useEffect, useState } from 'react';
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
                    <h1>Order Summary</h1>
                    <div className="cart">
                        <table class="table">

                            <h1>My-Cart</h1>



                            <tr>
                                <th>Total Added Cars:</th>
                                <td>Qty <span id="total-Products">{cart.length}</span></td>

                            </tr>
                            <tr>
                                <th>Price:</th>
                                <th>$ 0</th>

                            </tr>

                            <tr>
                                <th>Total-Tax:</th>
                                <th>$ <span id="total-tax">0</span></th>

                            </tr>
                            <tr>
                                <th scope="row">Total</th>
                                <th colspan="2">$ <span id="total">0</span></th>

                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cars;
