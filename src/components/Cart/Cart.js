import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css'; // Import CSS file

function Cart() {
    const items = useSelector((state) => state.items);

    return (
        <div className="cart-container">
            <h2 className="cart-title">Shopping Cart</h2>
            {Object.keys(items).length === 0 ? (
                <p className="cart-empty">Your cart is empty</p>
            ) : (
                <ul className="cart-list">
                    {Object.keys(items).map((key) => {
                        const product = items[key];
                        return (
                            <li key={product.id} className="cart-item">
                                <span className="cart-item-title">{product.title}</span>
                                <span className="cart-item-quantity">Quantity: <span className='quantity-number'>{product.quantity}</span></span>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

export default Cart;
