import React from "react";
import "./Cart.css";
import { useCart } from "../../Contexts/CartContext";

const Cart = () => {

  const { cartItems, removeFromCart } = useCart();

  return <div className="cart-page">
    {cartItems.map((item, index) => (
      <div key={index}>
        <h3>{item.title}</h3>
        <p>{item.price}</p>
        <button onClick={() => removeFromCart(item.title)}>Remove</button>
      </div>
    ))}
  </div>;
};

export default Cart;
