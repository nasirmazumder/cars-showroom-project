import React from 'react';
import './ShowCars.css'
const ShowCars = (props) => {
    console.log(props)
    const { img, name, price, year, engine, option, seater, rating } = props.car;


    return (
        <div className='showCars'>
            <div >
                <img src={img} alt="" />
                <h2>Name: {name}</h2>
                <h4>Year: {year}</h4>
                <p>Engine: {engine}</p>
                <p>Option: {option}</p>
                <p>Seat: {seater}</p>
                <p>Rating: {rating}</p>

                <h3>Price: ${price}</h3>
                <button onClick={() => props.handleBuyNow(props.product)} className='btn-buyNow'>Buy Now</button>



            </div>
        </div>
    );
};

export default ShowCars;
