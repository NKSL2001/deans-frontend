import * as actionTypes from "./actionTypes";
import { combineReducers } from "redux";

const initialState = {
  modal: {
    modalType: null,
    modalProps: null
  }
};

const modal = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.MODAL_SHOW:
      return {
        ...state,
        modalType: payload.modalType,
        modalProps: payload.modalProps
      };
    case actionTypes.MODAL_HIDE:
      return {
        ...state,
        modalType: null,
        modalProps: null
      };
    default:
      return state;
  }
};

export default combineReducers({ modal });
