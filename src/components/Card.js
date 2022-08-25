import React from "react";

export default function Card({ item, handleFavourite = () => {}, isSelected }) {
  return (
    <div
      className="card-container"
      onClick={() => handleFavourite(item)}
      style={{ backgroundColor: isSelected ? "red" : "gray" }}
    >
      <div className="img-container">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="content-container">
        <h6>{item.name}</h6>
        <div className="status-container">
          <div className="status"></div>
          <div>
            {item.status} - {item.species}
          </div>
        </div>
        <div className="location-container">
          <span>Last Known Location:</span>
          <span>{item.location.name}</span>
        </div>
        <div className="first-seen-container">
          <span>First Seen in:</span>
          <span>{item.origin.name}</span>
        </div>
      </div>
    </div>
  );
}
