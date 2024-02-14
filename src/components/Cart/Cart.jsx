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
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEES TO CHECKOUT</button>
          </div>
          <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
