import React from "react";
import "./articleCards.css";
import { useCart } from "../../Contexts/CartContext";
import { useMenu } from "../../Contexts/MenuContext";

const ArticleCards = ({ category }) => {
  const { addToCart } = useCart();
  const { menuItems } = useMenu();

  if (!menuItems[category]) {
    return (
      <div className="articleCardsContainer">
        Please select a valid category.
      </div>
    );
  }

  return (
    <article>
      <div className="articleCardsContainer">
        {menuItems[category].map((item, index) => (
          <section className="cardSection" key={index}>
            <h1 className="cardTitle">{item.title}</h1>
            <p className="cardDesc">{item.description}</p>

            <div className={`card card${index}`}>
              <img className="cardImg" src={item.image} alt={item.title} />
            </div>
            <div className="priceAndCart">
              <h1 className="item-price">${item.price}</h1>
              <button onClick={() => addToCart(item)} className="cart-button">
                ADD TO CART
              </button>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};

export default ArticleCards;
