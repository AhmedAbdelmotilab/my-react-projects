import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// eslint-disable-next-line
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozzarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinach",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinach.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Fungi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/fungi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salami",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salami.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozzarella, ham, arugula, and buryat cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <div className="header">
      <h1>Hello React Pizza CO.</h1>
    </div>
  );
}
function Pizza({ obj }) {
  return (
    <li className={`pizza ${obj.soldOut ? "sold-out" : ""}`}>
      <img src={obj.photoName} alt={obj.photoName} />
      <div>
        <h3>{obj.name}</h3>
        <p>{obj.ingredients}</p>
        <span>{obj.price}</span>
      </div>
    </li>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numOfPizza = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {numOfPizza > 0 ? (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia
            totam rerum quis doloremque voluptatem, debitis, delectus asperiores
            veniam nemo animi recusandae, quidem possimus unde sapiente porro
            numquam a nisi!
          </p>
          <ul className="pizzas">
            {pizzaData.map((p) => (
              <Pizza obj={p} key={p.name} />
            ))}
          </ul>
          <button className="btn">Order Now</button>
        </>
      ) : (
        <p>We'r Happy To Serve You Soon.</p>
      )}
    </div>
  );
}
function Open({ time, close }) {
  return (
    <p>
      It's Now {time} So We Are Open Until {close}:00 :)
    </p>
  );
}
function Close({ time, open }) {
  return (
    <p>
      It's Now {time} So We Are Close Until {open}:00 :)
    </p>
  );
}
function Footer() {
  const nowTime = new Date().toLocaleTimeString();
  const nowHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = openHour <= nowHour && closeHour >= nowHour;

  return (
    <div className="footer">
      {isOpen ? (
        <Open time={nowTime} close={closeHour} />
      ) : (
        <Close time={nowTime} open={openHour} />
      )}
    </div>
  );
}
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
