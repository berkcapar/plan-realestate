import { Link } from "react-router-dom";
import "./HighlightCard.css";

const HighlightCard = ({ property }) => {
  return (
    <div className="highlight-card">
      <Link
        style={{ textDecoration: "none" }}
        to={`/properties/${property.id}`}
      >
        <div className="highlightcard-textbox">
          <div>
            <img alt="property" src={property.photos[0]} />
            <h3>{property.title}</h3>
            <h3>{property.city}</h3>
            <p>{property.price}€</p>
            <p>{property.m2}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HighlightCard;
