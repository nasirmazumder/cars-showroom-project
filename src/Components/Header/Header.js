import React from 'react';
import bgphoto from '../../../src/image/carpicture.gif'
import './Header.css'
const Header = (props) => {
    return (
        <div className='header-section' >
            <div className='header'>
                <img src={bgphoto} alt="" />
                <h1>AL SAFI CAR SHOWROOM AND CAR RENTALS</h1>
                <br />
                <h2 className="slogan">High-tech Performance at Low-Tech value</h2>
                <h2>Minimum installment Up to 5000 Dolars</h2>
            </div>

        </div>
    );
};

export default Header;
