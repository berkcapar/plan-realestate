





const searchReducer = (state = [], action) => {
    switch(action.type){
        case "SEARCH":
            return action.homes
            default:
                return state
    }
};
