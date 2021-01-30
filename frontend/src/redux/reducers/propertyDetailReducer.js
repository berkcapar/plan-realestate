import propertyService from "../../services/property";

export const initPropertyDetails = () => {
  return async (dispatch) => {
    const data = await propertyService.getProperties();

    dispatch({
      type: "INIT_PROPERTIES",
      data: data.properties,
    });
  };
};

const propertyDetailReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_PROPERTIES":
      return action.data;

    default:
      return state;
  }
};

export default propertyDetailReducer;
