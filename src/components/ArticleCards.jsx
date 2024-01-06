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
        <section>
          <h1 className="cardTitle">Greek Salad</h1>
          <div className="card1">
            <img className="cardImg" src={greekSalad} alt="greekSalad" />
            <p className="cardDesc">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
          </div>
        </section>
        <section>
          <h1 className="cardTitle">Brushetta</h1>
          <div className="card2">
            <img className="cardImg" src={brushetta} alt="brushetta" />
            <p className="cardDesc">
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil. Toppings of
              tomato, veggies, beans, cured pork, or cheese are examples of
              variations. In Italy, a brustolina grill is frequently used to
              create bruschetta.
            </p>
          </div>
        </section>
        <section>
          <h1 className="cardTitle">Grilled Fish</h1>
          <div className="card3">
            <p className="cardDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sed cursus...
            </p>
            <img className="cardImg" src={grilledFish} alt="fish" />
          </div>
        </section>
        <section>
          <h1 className="cardTitle">Pasta</h1>
          <div className="card4">
            <p className="cardDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sed cursus...
            </p>
            <img className="cardImg" src={pasta} alt="pasta" />
          </div>
        </section>
        <section>
          <h1 className="cardTitle">Lemon Dessert</h1>
          <div className="card5">
            <p className="cardDesc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sed cursus...
            </p>
            <img className="cardImg" src={lemonDessert} alt="lemonDessert" />
          </div>
        </section>
      </div>
    </article>
  );
};

export default ArticleCards;
