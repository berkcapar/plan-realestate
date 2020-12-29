import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProperty } from "../../redux/reducers/propertyReducer";
import { showNotification } from "../../redux/reducers/notificationReducer";
import { Link, useParams } from "react-router-dom";

const AdminPanelPropertyItem = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  const property = useSelector((state) =>
    state.property.find((p) => p.id === id)
  );

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
      <img alt="property" src={property.photos[1]} />
      <img alt="property" src={property.photos[2]} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default AdminPanelPropertyItem;
