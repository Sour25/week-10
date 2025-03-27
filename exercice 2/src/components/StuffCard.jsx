import React from "react";

export default function StuffCard({ name, price }) {
  const formatPrice = (price) => `$${parseFloat(price).toFixed(2)}`;

  return (
    <div className="stuff">
      <h4>{name}</h4>
      <small>{formatPrice(price)}</small>
    </div>
  );
}
