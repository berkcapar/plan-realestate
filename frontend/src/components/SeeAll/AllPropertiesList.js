import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropertyItemList from "./PropertyItemList";
import { initProperties } from "../../redux/reducers/propertyReducer";
import { getPropertiesFromState } from "../../redux/selectors";

const AllPropertiesList = () => {
  const properties = useSelector(getPropertiesFromState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initProperties());
  }, [dispatch]);

  return (
    <div>
      <>
        {properties.map((property) => (
          <PropertyItemList property={property} />
        ))}
      </>
    </div>
  );
};

export default AllPropertiesList;
