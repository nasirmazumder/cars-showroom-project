import React from 'react';

console.log(props.cart)
    const { cart } = props;
    
    let total = 0;
    for(const product of cart) {
    total =total + parseInt(product.price)

   
    }
    let tax = 5;
    let totalTax = parseInt((total/100)*5);

  let totalPrice = total + totalTax;
     
    return (
        <div>
            <h1>Order Summary</h1>
            <div className="cart">
                <table class="table">

                    <h1>My-Cart</h1>



                    <tr>
                        <th>Total Added Cars:</th>
                        <td>Qty <span id="total-Products">{props.cart.length}</span></td>

                    </tr>
                    <tr>
                        <th>Price:</th>
                        <th>$ {total}</th>

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
    );
};

export default Cart;
