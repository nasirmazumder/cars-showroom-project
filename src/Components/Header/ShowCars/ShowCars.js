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
                <p>Rating: {rating} <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star filled"></i>
                                <i className="fas fa-star empty"></i>
                                <i className="fas fa-star empty"></i></p>

                <h3>Price: ${price}</h3>
                <button onClick={() => props.handleBuyNow(props.car)} className='btn-buyNow'><i className="fas fa-car-side"></i>Buy Now<i className="far fa-handshake"></i></button>


            </div>

        </div>
    );
};

export default ShowCars;
