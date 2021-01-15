const SingleSearchItem = ({ property }) => {
  return (
    <div>
      <h2>{property.title}</h2>
      <p>{property.city}</p>
    </div>
  );
};

export default SingleSearchItem;
