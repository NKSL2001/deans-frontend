import React from "react";
import { connect } from "react-redux";
import { showModal, hideModal } from "@redux/actions";
import CreateNewCrisis from "@components/common/Modals/CreateNewCrisis";
import EditCrisis from "@components/common/Modals/EditCrisis";
import DispatchCrisis from "@components/common/Modals/DispatchCrisis";
import AddUser from "@components/common/Modals/AddUser";
import EditUser from "@components/common/Modals/EditUser";

const ModalContainer = props => {
  switch (props.modalType) {
    case "CREATE_NEW_CRISIS":
      return (
        <CreateNewCrisis {...props.modalProps} hideModal={props.hideModal} />
      );
    case "EDIT_CRISIS":
      return <EditCrisis {...props.modalProps} hideModal={props.hideModal} />;
    case "DISPATCH_CRISIS":
      return (
        <DispatchCrisis {...props.modalProps} hideModal={props.hideModal} />
      );
    case "ADD_USER":
      return <AddUser {...props.modalProps} hideModal={props.hideModal} />;
    case "EDIT_USER":
      return <EditUser {...props.modalProps} hideModal={props.hideModal} />;
    default:
      return null;
  }
};

const mapStateToProps = state => {
  const { modal } = state;
  return {
    modalType: modal && modal.modalType,
    modalProps: modal && modal.modalProps // for future use if need to pass props
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showModal: (modalType, modalProps) =>
      dispatch(showModal(modalType, modalProps)),
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
