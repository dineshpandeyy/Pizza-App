import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

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
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "32px", textTransform: "uppercase"}
  const style = {}

  return (
    <header className="header">
      <h1 style={style} >Bella Napoli Pizza Company</h1>
    </header>
  )
}

// Menu is parent component for Pizza
function Menu() {
  const pizzas = pizzaData

  return (
    <main className="menu">
      <h2>Menu</h2>

      {pizzas.length > 0 ? (
        <>
          <p>Authentic Italian cuisine with six creative dishes to choose from.</p>

          <ul className="pizzas">
            {
              pizzas.map((pizza) =>
                <Pizza pizzaOjb={pizza} key={pizza.name} />
              )
            }
          </ul>
        </>
      ) : <p>We are still working on the menu. Please come back later.</p>}

      {/* <Pizza
        pizzaName="Pizza Spinaci"
        image="pizzas/funghi.jpg"
        ingredients="Tomato, mozarella, and pepperoni"
        // price={100}
        price={100}
      />

      <Pizza
        pizzaName="Pizza Prosciutto"
        image="pizzas/prosciutto.jpg"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={10}
        // when ever we need to pass somrthing that is not string we need to enter js mode using {}
      /> */}
    </main>
  );
}

// Pizza is a child components of Menu
function Pizza({ pizzaOjb }) {
  console.log(pizzaOjb)

  // if (pizzaOjb.soldOut) return null;

  return (
    <li className={`pizza ${pizzaOjb.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaOjb.photoName} alt="pizza funghi" />
      <div>
        <h3>{pizzaOjb.name}</h3>
        <p>{pizzaOjb.ingredients}</p>
        <p>{pizzaOjb.soldOut ? "SOLD OUT" : pizzaOjb.price}</p>
      </div>
    </li>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openHour = 10
  const closeHour = 21
  const isOpen = hours >= openHour && hours <= closeHour
  console.log(isOpen)

  // if (hours >= openHour & hours <= closeHour) {
  //   alert("We are currently open")
  // }else {
  //   alert("We are currently closed")
  // }
  return <footer className="footer">
    {isOpen ? (
      <Order closeHourProp={closeHour} openHourProp={openHour} />
    ) : <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00 </p>
    }
  </footer >
}

function Order({ closeHourProp, openHourProp }) {

  return <div className="order">
    <p> We are open from {openHourProp}:00 to {closeHourProp}:00. Come Visit Us</p>
    <button className="btn">Order</button>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);