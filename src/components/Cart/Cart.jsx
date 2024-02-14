import React from "react";
import "./Cart.css";
import { useCart } from "../../Contexts/CartContext";
import remove_icon from "../../assets/cart_cross_icon.png";

const Cart = () => {
  const { cartItems, removeFromCart, getTotalCartAmount } = useCart();

  return (
    <div className="cart-page">
      <div className="cart-list">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
        <div>Remove</div>
      </div>
      <div>
        <hr className="uhm-hr" />
      </div>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <p>{item.title}</p>
            <p>${item.price}</p>
            <p>
              {" "}
              <span className="item-quantity">{item.quantity}</span>
            </p>
            <p>${item.price * item.quantity}</p>
            <img
              onClick={() => removeFromCart(item.title)}
              className="cart-remove-icon"
              src={remove_icon}
              alt="remove"
            />
          </div>
        ))}
        <div className="cart-container">
          <div>
            <h1 className="cart-title">Cart Totals</h1>
            <div>
              <div className="cart-subtotal">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-shipping">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cart-total">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button className="cart-button-cart">PROCEES TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
