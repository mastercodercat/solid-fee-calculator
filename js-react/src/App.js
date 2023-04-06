import React, { useState } from "react";

import "./App.css";
import { Calculator } from "./calculator";
import ItemCard from "./components/ItemCard";
import NewItemForm from "./components/NewItemForm";

const App = () => {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);

  const onSubmit = (newItem) => {
    const calc = new Calculator();
    const fee = calc.getFee({
      ...newItem,
      userType: parseInt(newItem.userType, 10),
      itemType: parseInt(newItem.itemType, 10),
    });

    setItems([
      ...items,
      {
        ...newItem,
        fee,
      },
    ]);
    setTotal(total + fee);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Welcome to Solid Fee Calculator</h1>
      </header>
      <div className="app-page">
        <div className="app-form">
          <h2>Items</h2>
          <p>Total fees: {total} </p>
          <h3>Register new item</h3>
          <NewItemForm onSubmit={onSubmit} />
        </div>
        <div className="app-items">
          {items.map((item, index) => (
            <ItemCard
              key={`item-${index}`}
              itemType={item.itemType}
              userType={item.userType}
              price={item.price}
              fee={item.fee}
              endDate={item.endDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
