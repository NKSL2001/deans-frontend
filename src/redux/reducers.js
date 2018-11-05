import * as actionTypes from "./actionTypes";
import { combineReducers } from "redux";

const initialState = {
  staff: {
    flag: false,
    userList: null
  },
  system: {
    crisisType: null,
    assistanceType: null
  },
  common: {
    flag: false,
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

const staff = (state = initialState.staff, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.USER_LOGIN_REQUESTED:
      return {
        ...state,
        flag: false // reset flag
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      localStorage.setItem("token", payload.key); // set token
      return {
        ...state,
        flag: true
      };
    case actionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        flag: false
      };
    case actionTypes.FETCH_USER_LIST_SUCCESS:
      return {
        ...state,
        userList: payload
      };
    case actionTypes.RESOLVE_CRISIS_REQUESTED:
      return {
        ...state,
        flag: false // reset flag
      };
    case actionTypes.RESOLVE_CRISIS_SUCCESS:
      return {
        ...state,
        flag: true
      };
    case actionTypes.RESOLVE_CRISIS_FAILURE:
      return {
        ...state,
        flag: false
      };
    case actionTypes.ADD_USER_REQUESTED:
      return {
        ...state,
        flag: false
      };
    case actionTypes.ADD_USER_SUCCESS:
      return {
        ...state,
        flag: true
      };
    case actionTypes.ADD_USER_FAILURE:
      return {
        ...state,
        flag: false
      };
    case actionTypes.EDIT_USER_REQUESTED:
      return {
        ...state,
        flag: false
      };
    case actionTypes.EDIT_USER_SUCCESS:
      return {
        ...state,
        flag: true
      };
    case actionTypes.EDIT_USER_FAILURE:
      return {
        ...state,
        flag: false
      };
    case actionTypes.ADD_CRISIS_TYPE_REQUESTED:
      return {
        ...state,
        flag: false
      };
    case actionTypes.ADD_CRISIS_TYPE_SUCCESS:
      return {
        ...state,
        flag: true
      };
    case actionTypes.ADD_CRISIS_TYPE_FAILURE:
      return {
        ...state,
        flag: false
      };
    case actionTypes.ADD_ASSISTANCE_TYPE_REQUESTED:
      return {
        ...state,
        flag: false
      };
    case actionTypes.ADD_ASSISTANCE_TYPE_SUCCESS:
      return {
        ...state,
        flag: true
      };
    case actionTypes.ADD_ASSISTANCE_TYPE_FAILURE:
      return {
        ...state,
        flag: false
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
    case actionTypes.REPORT_CRISIS_REQUESTED:
      return {
        ...state,
        flag: false // reset flag
      };
    case actionTypes.REPORT_CRISIS_SUCCESS:
      return {
        ...state,
        flag: true
      };
    case actionTypes.REPORT_CRISIS_FAILURE:
      return {
        ...state,
        flag: false
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

export default combineReducers({ modal, common, system, staff });
