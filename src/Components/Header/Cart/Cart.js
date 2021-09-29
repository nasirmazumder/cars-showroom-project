import React from 'react';

const Cart = (props) => {
    // Destructuring
    const { cart } = props;
    let carName = '';
    let total = 0;
    for (const product of cart) {
        total = total + parseInt(product.price)
        carName = product.name

    }
    // Tax calculation 
    let tax = 5;
    let totalTax = parseInt((total / 100) * tax);
    //total price calculation.
    let totalPrice = total + totalTax;

    return (
        <div>
            <h1>Order Summary</h1>
            <div className="cart">
                <h1>My-Cart</h1>
                <table className="table">





                    <tr>
                        <th>Total Added Cars:</th>
                        <td>Qty {props.cart.length}</td>

                    </tr>

                    <tr>
                        <th>Price:</th>
                        <th>$ {total}</th>

                    </tr>

                    <tr>
                        <th>Total-Tax:</th>
                        <th>$ {totalTax}</th>

                    </tr>
                    <tr>
                        <th>Total</th>
                        <th>$ {totalPrice} </th>

                    </tr>

                </table>
                <ul>
                    <li>{carName}</li>
                </ul>
            </div>
            <div className="check-out">
                <button className="btn-buyNow">Check out</button>
            </div>
        </div>
    );
};

export default Cart;
