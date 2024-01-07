import React from "react";
import "./articleCards.css";
import greekSalad from "../assets/greek salad.jpg";
import brushetta from "../assets/brushettaIMG.png";
import grilledFish from "../assets/grilledFish.png";
import pasta from "../assets/pasta.png";
import lemonDessert from "../assets/lemon dessert.jpg";
import Mojito from "../assets/mojito.png";
import Chocolate from "../assets/chocolate.png";

const ArticleCards = ({ category }) => {
  const MENU_ITEMS = {
    Specials: [
      {
        title: "Grilled Fish",
        image: grilledFish,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus...",
      },
      {
        title: "Hot Chocolate",
        image: Chocolate,
        description:
          "Indulge in a cup of our sumptuous Hot Chocolate, a velvety smooth symphony of rich, dark chocolate lovingly melted into creamy steamed milk.",
      },
    ],
    Starters: [
      {
        title: "Greek salad",
        image: greekSalad,
        description:
          "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      },
      {
        title: "Brushetta",
        image: brushetta,
        description:
          "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
      },
    ],
    Main: [
      {
        title: "Grilled Fish",
        image: grilledFish,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus...",
      },
      {
        title: "Pasta",
        image: pasta,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus...",
      },
    ],
    Desserts: [
      {
        title: "Lemon Dessert",
        image: lemonDessert,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus...",
      },
    ],
    Drinks: [
      {
        title: "Mojito Cocktail",
        image: Mojito,
        description:
          "Savor the zesty allure of our Strong Mojito, a tantalizing blend of robust white rum intensified by the fresh, aromatic kick of garden-picked mint leaves.",
      },
      {
        title: "Hot Chocolate",
        image: Chocolate,
        description:
          "Indulge in a cup of our sumptuous Hot Chocolate, a velvety smooth symphony of rich, dark chocolate lovingly melted into creamy steamed milk.",
      },
    ],
    All: [
      {
        title: "Greek salad",
        image: greekSalad,
        description:
          "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      },
      {
        title: "Brushetta",
        image: brushetta,
        description:
          "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
      },
      {
        title: "Grilled Fish",
        image: grilledFish,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus...",
      },
      {
        title: "Pasta",
        image: pasta,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus...",
      },
      {
        title: "Lemon Dessert",
        image: lemonDessert,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus...",
      },
      {
        title: "Mojito Cocktail",
        image: Mojito,
        description:
          "Savor the zesty allure of our Strong Mojito, a tantalizing blend of robust white rum intensified by the fresh, aromatic kick of garden-picked mint leaves.",
      },
      {
        title: "Hot Chocolate",
        image: Chocolate,
        description:
          "Indulge in a cup of our sumptuous Hot Chocolate, a velvety smooth symphony of rich, dark chocolate lovingly melted into creamy steamed milk.",
      },
    ],
  };

  const menuItems = MENU_ITEMS[category];

  if (!menuItems) {
    return (
      <div className="articleCardsContainer">
        Please select a valid category.
      </div>
    );
  }

  return (
    <article>
      <div className="articleCardsContainer">
        {menuItems.map((item, index) => (
          <section key={index}>
            <h1 className="cardTitle">{item.title}</h1>
            <div className={`card card${index}`}>
              <img className="cardImg" src={item.image} alt={item.title} />
              <p className="cardDesc">{item.description}</p>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
};

export default ArticleCards;
