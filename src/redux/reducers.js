import * as actionTypes from "./actionTypes";
import { combineReducers } from "redux";

const initialState = {
  common: {
    crises: null
  },
  modal: {
    modalType: null,
    modalProps: null
  }
};

const common = (state = initialState.common, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.FETCH_CRISIS_SUCCESS:
      return {
        ...state,
        crises: payload
      };
    default:
      return state;
  }
};

const modal = (state = initialState.modal, action) => {
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

export default combineReducers({ modal, common });
