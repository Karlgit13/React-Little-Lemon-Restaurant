import React from "react";
import "./articleCards.css";
import greekSalad from "../assets/greek salad.jpg";
import brushetta from "../assets/brushettaIMG.png";
import grilledFish from "../assets/grilledFish.png";
import pasta from "../assets/pasta.png";
import lemonDessert from "../assets/lemon dessert.jpg";

const ArticleCards = () => {
  return (
    <article>
      <div className="articleCardsContainer">
        <section className="card1">
          <h1 className="cardTitle">Greek Salad</h1>
          <p className="cardDesc">
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <img className="cardImg" src={greekSalad} alt="greekSalad" />
        </section>
        <section className="card2">
          <h1 className="cardTitle">Brushetta</h1>
          <p className="cardDesc">
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil. Toppings of tomato,
            veggies, beans, cured pork, or cheese are examples of variations. In
            Italy, a brustolina grill is frequently used to create bruschetta.
          </p>
          <img className="cardImg" src={brushetta} alt="brushetta" />
        </section>
        <section className="card3">
          <h1 className="cardTitle">Grilled Fish</h1>
          <p className="cardDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
            cursus...
          </p>
          <img className="cardImg" src={grilledFish} alt="fish" />
        </section>
        <section className="card4">
          <h1 className="cardTitle">Pasta</h1>
          <p className="cardDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
            cursus...
          </p>
          <img className="cardImg" src={pasta} alt="pasta" />
        </section>
        <section className="card5">
          <h1 className="cardTitle">Lemon Dessert</h1>
          <p className="cardDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
            cursus...
          </p>
          <img className="cardImg" src={lemonDessert} alt="lemonDessert" />
        </section>
      </div>
    </article>
  );
};

export default ArticleCards;
