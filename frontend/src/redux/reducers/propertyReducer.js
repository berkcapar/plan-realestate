import propertyService from "../../services/property";

export const addProperty = (
  option,
  propertyType,
  title,
  city,
  price,
  m2,
  roomnumber
) => {
  return async (dispatch) => {
    const newProperty = await propertyService.addProperty(
      option,
      propertyType,
      title,
      city,
      price,
      m2,
      roomnumber
    );
    dispatch({
      type: "ADD_PROPERTY",
      data: newProperty,
    });
  };
};

export const initProperties = () => {
  return async (dispatch) => {
    const data = await propertyService.getProperties();
    dispatch({
      type: "INIT_PROPERTIES",
      data: data.properties,
    });
  };
};

const propertyReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PROPERTY":
      return [...state, action.data];
    case "INIT_PROPERTIES":
      return action.data;

    default:
      return state;
  }
};

export default propertyReducer;
