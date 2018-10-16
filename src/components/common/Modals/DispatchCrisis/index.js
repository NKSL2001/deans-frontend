import React from "react";
import PropTypes from "prop-types";
import Modal from "antd/lib/modal";
import CrisisDispatchForm from "./CrisisDispatchForm";
import * as styles from "./style.scss";

const DispatchCrisis = props => {
  return (
    <Modal
      centered
      title="DISPATCH CRISIS"
      visible
      onCancel={props.hideModal}
      footer={null}
    >
      <div className={styles.summary}>
        <div className={styles.summaryHeader}>SUMMARY</div>
        <div className={styles.summaryHint}>
          The following information will be submitted to emergency agencies.
        </div>
        <div className={styles.summaryContainer}>
          <div className={styles.label}>Reporter Name:</div>
          <div className={styles.value}>James Bond</div>
          <div className={styles.label}>Mobile Number:</div>
          <div className={styles.value}>+65 12348888</div>
          <div className={styles.label}>Location:</div>
          <div className={styles.value}>50 Nanyang Walk 639929</div>
          <div className={styles.label}>Location 2:</div>
          <div className={styles.value}>
            #04-01, BLk B, Hall of Residence 16
          </div>
          <div className={styles.label}>Crisis Type:</div>
          <div className={styles.value}>
            Rescue and Evacuation, Fire Fighting
          </div>
          <div className={styles.label}>Crisis Description:</div>
          <div className={styles.value}>Fire in the hole!</div>
          <div className={styles.label}>Assistance Type:</div>
          <div className={styles.value}>Ambulance, Fire Brigade</div>
          <div className={styles.label}>Assistance Description:</div>
          <div className={styles.value}>Need immediate medical help</div>
        </div>
      </div>
      <div className={styles.crisisDispatchForm}>
        <CrisisDispatchForm />
      </div>
    </Modal>
  );
};

DispatchCrisis.propTypes = {
  hideModal: PropTypes.func.isRequired
};

export default DispatchCrisis;
