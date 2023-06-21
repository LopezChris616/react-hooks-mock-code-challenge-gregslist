import React, { useState } from "react";

function ListingCard({ listing, onHandleDelete }) {
  const [favorite, setFavorite] = useState(false);

  function handleFavoriteClick() {
    setFavorite(favorite => !favorite);
  }

  function deleteListing() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => onHandleDelete(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteClick}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={deleteListing}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
