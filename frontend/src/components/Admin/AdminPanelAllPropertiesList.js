import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AdminPanelPropertyItem from "./AdminPanelPropertyItem";
import { initProperties } from "../../redux/reducers/propertyReducer";
import {
  getLoggedInfoFromState,
  getPropertiesFromState,
} from "../../redux/selectors";

const AdminPanelAllPropertiesList = () => {
  const properties = useSelector(getPropertiesFromState);
  console.log(properties);
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector(getLoggedInfoFromState);

  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/adminpanellogin");
    }
  }, [history, isLoggedIn]);

  useEffect(() => {
    dispatch(initProperties());
  }, [dispatch]);

  return (
    <div>
      {properties.map((property) => (
        <AdminPanelPropertyItem key={property.id} property={property} />
      ))}
    </div>
  );
};

export default AdminPanelAllPropertiesList;
