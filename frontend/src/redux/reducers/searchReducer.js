import propertyService from "../../services/property";

export const searchProperty = (searchData) => {
  return async (dispatch) => {
    try {
      const { properties } = await propertyService.searchProperty(searchData);
      dispatch({
        type: "SEARCH_PROPERTY",
        data: properties,
      });
    } catch {}
  };
};

const searchReducer = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_PROPERTY":
      return action.data;
    default:
      return state;
  }
};

export default searchReducer;
