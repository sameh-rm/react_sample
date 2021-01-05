import { SECTIONS } from "../../directory.data";
import DirectoryActionTypes from "./directory.types";
const INITIAL_STATE = {
  sections: SECTIONS,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DirectoryActionTypes.ADD_DIRECTORY:
      return {
        ...state,
        sections: action.payload,
      };
    default:
      return state;
  }
};
export default directoryReducer;
