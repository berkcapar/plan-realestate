import { Button } from "@material-ui/core";
import "./ImageArea.css";

const ImageArea = ({ property }) => {
  return (
    <div className="image-area">
      <div className="big-image">
        <img src={property.photos[0]} alt="property" />
      </div>
      <div className="small-images">
        <img src={property.photos[1]} alt="property" />
        <img src={property.photos[2]} alt="property" />
        <img src={property.photos[3]} alt="property" />
        <img src={property.photos[4]} alt="property" />
      </div>
    </div>
  );
};
export default ImageArea;
