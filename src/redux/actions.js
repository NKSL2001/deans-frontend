import * as actionTypes from "./actionTypes";
import * as api from "@api";

export const initSystem = () => {
  return async dispatch => {
    dispatch({
      type: actionTypes.FETCH_CRISIS_TYPE_REQUESTED
    });
    api
      .getCrisisType()
      .then(response =>
        dispatch({
          type: actionTypes.FETCH_CRISIS_TYPE_SUCCESS,
          payload: response.data
        })
      )
      .catch(() =>
        dispatch({
          type: actionTypes.FETCH_CRISIS_TYPE_FAILURE
        })
      );
    dispatch({
      type: actionTypes.FETCH_ASSISTANCE_TYPE_REQUESTED
    });
    api
      .getAssistanceType()
      .then(response =>
        dispatch({
          type: actionTypes.FETCH_ASSISTANCE_TYPE_SUCCESS,
          payload: response.data
        })
      )
      .catch(() =>
        dispatch({
          type: actionTypes.FETCH_ASSISTANCE_TYPE_FAILURE
        })
      );
  };
};

export const getCrises = () => {
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

export const getUserList = () => {
  return async dispatch => {
    dispatch({
      type: actionTypes.FETCH_USER_LIST_REQUESTED
    });
    api
      .getUserList()
      .then(response =>
        dispatch({
          type: actionTypes.FETCH_USER_LIST_SUCCESS,
          payload: response.data
        })
      )
      .catch(() =>
        dispatch({
          type: actionTypes.FETCH_USER_LIST_FAILURE
        })
      );
  };
};

export const reportCrises = form => {
  return async dispatch => {
    dispatch({
      type: actionTypes.REPORT_CRISIS_REQUESTED
    });
    await api
      .reportCrises(form)
      .then(() => dispatch({ type: actionTypes.REPORT_CRISIS_SUCCESS }))
      .catch(() => dispatch({ type: actionTypes.REPORT_CRISIS_FAILURE }));
  };
};

export const userLogin = form => {
  return async dispatch => {
    dispatch({
      type: actionTypes.USER_LOGIN_REQUESTED
    });
    await api
      .userLogin(form)
      .then(response => {
        dispatch({
          type: actionTypes.USER_LOGIN_SUCCESS,
          payload: response.data
        });
      })
      .catch(() => dispatch({ type: actionTypes.USER_LOGIN_FAILURE }));
  };
};

export const resolveCrisis = id => {
  return async dispatch => {
    dispatch({
      type: actionTypes.RESOLVE_CRISIS_REQUESTED
    });
    await api
      .resolveCrisis(id)
      .then(() => {
        dispatch({
          type: actionTypes.RESOLVE_CRISIS_SUCCESS
        });
      })
      .catch(() => dispatch({ type: actionTypes.RESOLVE_CRISIS_FAILURE }));
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
