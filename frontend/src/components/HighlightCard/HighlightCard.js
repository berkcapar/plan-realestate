import { Link } from "react-router-dom";
import "./HighlightCard.css";

const HighlightCard = ({ property }) => {
  return (
    <div className="highlight-card">
      <div className="highlightcard-textbox">
        <div>
          <Link to={`/properties/${property.id}`}>
            <h2>{property.city}</h2>
          </Link>
          <h1>{property.title}</h1>
          <img alt="property" src={property.photos[0]} />
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
