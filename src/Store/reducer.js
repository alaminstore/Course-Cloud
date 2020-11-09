export const initialState = {
  fixed: "",
  title: "Course Cloud",
  bookmark1: false,
  user: {},
  ui: {
    drawer: false,

    new: "",
  },
};

export const actionTypes = {
  SET_FIXED: "SET_FIXED",
  SET_STATE: "SET_STATE",
  TOGGLEDRAWER: "TOGGLEDRAWER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_FIXED:
      return {
        ...state,
        fixed: action.fixed,
      };
    case actionTypes.TOGGLEDRAWER:
      console.log(action.payload);
      return {
        ...state,
        ui: action.payload,
      };

    case actionTypes.SET_STATE:
      let name = action.payload.name;
      let obj = {};
      obj = { ...state };
      obj[name] = action.payload.value;
      return obj;
    default:
      return state;
  }
};
export default reducer;
