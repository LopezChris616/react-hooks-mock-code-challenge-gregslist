import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(listings => setListings(listings))
      .catch(err => console.error(err));
  }, [])

  function handleDelete(deletedListing) {
    const updatedListings = listings.filter(listing => listing.id !== deletedListing.id);
    setListings(updatedListings);
  }

  return (
    <main>
      <ul className="cards">
        {listings.map(listing => 
         <ListingCard 
            key={listing.id}
            listing={listing}
            onHandleDelete={handleDelete}
          />
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
