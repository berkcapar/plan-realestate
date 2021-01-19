const PropertyItemList = ({ property }) => {
  return (
    <div>
      <h2>{property.city}</h2>
      <h1>{property.title}</h1>
      <img alt="property" src={property.photos[1]} />
    </div>
  );
};

export default PropertyItemList;
