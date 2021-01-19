import HighlightCard from "../../HighlightCard/HighlightCard";
import { useDispatch, useSelector } from "react-redux";
import { getPropertiesFromState } from "../../../redux/selectors";
import "./HighlightedArea.css";
import { useEffect } from "react";
import { initProperties } from "../../../redux/reducers/propertyReducer";

const HighlightedArea = () => {
  const properties = useSelector(getPropertiesFromState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initProperties());
  }, [dispatch]);

  return (
    <div className="highlighted-area">
      {properties.map((property) => (
        <HighlightCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default HighlightedArea;
