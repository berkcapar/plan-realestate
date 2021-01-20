import React from "react";
import { useDispatch } from "react-redux";
import { deleteProperty } from "../../redux/reducers/propertyReducer";
import { showNotification } from "../../redux/reducers/notificationReducer";
import { Link } from "react-router-dom";

const AdminPanelPropertyItem = ({ property }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const confirm = window.confirm(`Are you sure removing selected property?`);
    if (confirm) {
      try {
        dispatch(deleteProperty(property.id));
      } catch (error) {
        dispatch(showNotification(`Silme Başarısız Oldu`));
      }
    }
  };
  return (
    <div>
      <Link to={`/adminpanel-allproperties/${property.id}`}>
        <h2>{property.city}</h2>
      </Link>
      <h1>{property.title}</h1>
      <img alt="property" src={property.photos[0]} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default AdminPanelPropertyItem;
