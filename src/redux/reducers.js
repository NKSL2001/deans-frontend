import * as actionTypes from "./actionTypes";
import { combineReducers } from "redux";

const initialState = {
  system: {
    crisisType: null,
    assistanceType: null
  },
  common: {
    crises: null
  },
  modal: {
    modalType: null,
    modalProps: null
  }
};

const system = (state = initialState.system, action) => {
  const { type, payload } = action;
  const transform = obj => {
    const type = {};
    obj.forEach(val => {
      type[val.id] = val.name;
    });
    return type;
  };
  switch (type) {
    case actionTypes.FETCH_CRISIS_TYPE_SUCCESS:
      return {
        ...state,
        crisisType: transform(payload)
      };
    case actionTypes.FETCH_ASSISTANCE_TYPE_SUCCESS:
      return {
        ...state,
        assistanceType: transform(payload)
      };
    default:
      return state;
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

export default combineReducers({ modal, common, system });
