import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProperty } from "../redux/reducers/propertyReducer";
import { showNotification } from "../redux/reducers/notificationReducer";
import { Link, useHistory } from "react-router-dom";

const AdminPanelPropertyItem = ({ property }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const id = useParams().id;
  // const property = useSelector((state) =>
  //   state.property.find((p) => p.id === id)
  // );

  const handleDelete = () => {
    const confirm = window.confirm(`Are you sure removing selected property?`);
    if (confirm) {
      try {
        dispatch(deleteProperty(property.id));
        // history.push("/adminpanel-allproperties"); *zaten bu sayfadayiz*
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
      <img alt="property" src={property.photos[1]} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default AdminPanelPropertyItem;
