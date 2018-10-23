import * as actionTypes from "./actionTypes";
import * as api from "@api";

export const getCrises = () => {
  api
    .getCrises()
    .then(response => console.log(response))
    .catch(error => console.log(error));
  return async dispatch => {
    dispatch({
      type: actionTypes.FETCH_CRISIS_REQUESTED
    });
    api
      .getCrises()
      .then(response =>
        dispatch({
          type: actionTypes.FETCH_CRISIS_SUCCESS,
          payload: response.data
        })
      )
      .catch(() =>
        dispatch({
          type: actionTypes.FETCH_CRISIS_FAILURE
        })
      );
  };
};

export const showModal = (modalType, modalProps) => {
  return {
    type: actionTypes.MODAL_SHOW,
    payload: {
      modalType,
      modalProps
    }
  };
};

export const hideModal = () => {
  return {
    type: actionTypes.MODAL_HIDE
  };
};
