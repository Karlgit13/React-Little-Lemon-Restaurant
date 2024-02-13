import brushetta from "../assets/brushettaIMG.png";
import grilledFish from "../assets/grilledFish.png";
import pasta from "../assets/pasta.png";
import lemonDessert from "../assets/lemon dessert.jpg";
import Mojito from "../assets/mojito.png";
import Chocolate from "../assets/chocolate.png";
import GreekSaladNew from "../assets/GreekSalladNew.png";
import { createContext, useContext, useEffect, useState } from "react";

function randomPrice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
      image: GreekSaladNew,
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
      image: GreekSaladNew,
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

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState(MENU_ITEMS);

  useEffect(() => {
    const generateMenuItemsWithPrices = () => {
      const itemsWithPrices = Object.keys(MENU_ITEMS).reduce(
        (acc, category) => {
          const items = MENU_ITEMS[category].map((item) => ({
            ...item,
            price: randomPrice(5, 20),
          }));
          acc[category] = items;
          return acc;
        },
        {}
      );

      return itemsWithPrices;
    };

    const itemsWithPrices = generateMenuItemsWithPrices();
    setMenuItems(itemsWithPrices);
  }, []);

  return (
    <MenuContext.Provider value={{ menuItems }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
