import * as actionTypes from "./actionTypes";

export function showModal(modalType: string, modalProps: Object) {
  return {
    type: actionTypes.MODAL_SHOW,
    payload: {
      modalType,
      modalProps
    }
  };
}

export function hideModal() {
  return {
    type: actionTypes.MODAL_HIDE
  };
}
