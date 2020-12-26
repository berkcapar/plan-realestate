import React from "react";

const PropertyItemList = ({ property }) => {
  console.log(property.photos[0]);
  return (
    <div>
      <h2>{property.city}</h2>
      <h1>{property.title}</h1>
      <img alt="property" src={property.photos[0]} />
    </div>
  );
};

export default PropertyItemList;
