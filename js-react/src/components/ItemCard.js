import React from "react";

const ItemCard = ({ itemType, userType, price, fee, endDate }) => {
  return (
    <div className="card">
      <h2>{userType === 0 ? "Person" : "Company"}</h2>
      <p>Type: {itemType === 0 ? "Auction" : "Buy Now"}</p>
      <p>Price: {price}</p>
      <p>Ended date: {endDate}</p>
      <p>Fee: {fee}</p>
    </div>
  );
};

export default ItemCard;
