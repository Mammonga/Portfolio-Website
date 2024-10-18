import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
    id: 1,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
    id: 2,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
    id: 3,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
    id: 4,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
    id: 5,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
    id: 6,
  },
]

export default function PizzaMenu() {
  const [openOrder, setOpenOrder] = useState(true)

  function handleOpenOrder() {
    setOpenOrder(!openOrder)
    console.log('check')
  }
  return (
    <div className="container">
      {openOrder ? (
        <OrderWindow onOpenOrder={handleOpenOrder} />
      ) : (
        <>
          <Header>Fast React Pizza Co.</Header>
          <Menu />
          <Footer onOpenOrder={handleOpenOrder} />
        </>
      )}
    </div>
  )
}

function Header({ children }) {
  return (
    <header className="header">
      <h1>{children}</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData
  const numPizzas = pizzas.length

  return (
    <div className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.id} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : null}
    </div>
  )
}

function Pizza({ pizzaObj, order, onPizzaAdd, onPizzaRemove }) {
  return (
    <li className={pizzaObj.soldOut ? 'pizza sold-out' : 'pizza'}>
      <img src={pizzaObj.photoName} alt="pizza" />

      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price + '€'}</span>
      </div>
      {order && !pizzaObj.soldOut ? (
        <div>
          <button onClick={onPizzaAdd} className="btn-order">
            +
          </button>
          <button onClick={onPizzaRemove} className="btn-order">
            -
          </button>
        </div>
      ) : null}
    </li>
  )
}

function Footer({ onOpenOrder }) {
  const hour = new Date().getHours()
  const openHour = 9
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} onOpenOrder={onOpenOrder} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  )
}

function Order({ closeHour, openHour, onOpenOrder }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn" onClick={onOpenOrder}>
        Order
      </button>
    </div>
  )
}

function OrderWindow({ onOpenOrder }) {
  const [order, setOrder] = useState([])
  const pizzas = pizzaData

  function handlePizzaAdd(id) {
    const selectedPizza = pizzas.find((pizza) => pizza.id === id)
    if (selectedPizza) {
      setOrder((prevOrder) => {
        const existingPizza = prevOrder.find((item) => item.id === id)
        if (existingPizza) {
          return prevOrder.map((item) =>
            item.id === id ? { ...item, numPizzas: item.numPizzas + 1 } : item
          )
        } else {
          return [...prevOrder, { ...selectedPizza, numPizzas: 1 }]
        }
      })
    }
  }

  function handlePizzaRemove(id) {
    setOrder((prevOrder) => {
      return prevOrder
        .map((item) =>
          item.id === id ? { ...item, numPizzas: item.numPizzas - 1 } : item
        )
        .filter((item) => item.numPizzas > 0)
    })
  }

  return (
    <div className="container">
      <Header>Order</Header>

      <div className="order-window">
        <div className="menu-section">
          <label
            style={{ fontSize: '20px' }}
            className="close-label"
            onClick={onOpenOrder}
          >
            ❌
          </label>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza
                key={pizza.id}
                pizzaObj={pizza}
                order={true}
                onPizzaAdd={() => handlePizzaAdd(pizza.id)}
                onPizzaRemove={() => handlePizzaRemove(pizza.id)}
              />
            ))}
          </ul>
        </div>
        <div className="bill-section">
          <div className="bill">
            <Bill order={order} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Bill({ order }) {
  const totalBill = order.reduce(
    (acc, item) => acc + item.price * item.numPizzas,
    0
  )
  return (
    <>
      {order.length === 0 ? (
        <p>No items in the order yet.</p>
      ) : (
        <>
          <ul>
            {order.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price} x {item.numPizzas} = $
                {item.price * item.numPizzas}
              </li>
            ))}
          </ul>
          <h1>Bill: {totalBill}€</h1>
        </>
      )}
    </>
  )
}
