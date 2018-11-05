import React from "react";
import PropTypes from "prop-types";
import { Table, Button } from "antd";
import * as styles from "./style.scss";

const EmergencyAgenciesTable = props => {
  const COLUMNS = [
    {
      title: "Agency",
      dataIndex: "agency",
      key: "agency"
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber"
    },
    {
      title: "Actions",
      key: "actions",
      dataIndex: "actions"
    }
  ];

  const createDataSource = () => {
    const { emergencyAgencies } = props;
    return emergencyAgencies.map(agency => {
      const name = agency.agency;
      const phoneNumber = agency.phone_number;
      return {
        agency: name,
        phoneNumber: phoneNumber,
        actions: (
          <div className={styles.actions}>
            <Button type="dashed">Edit</Button>
            <Button type="danger">Delete</Button>
          </div>
        )
      };
    });
  };

  return (
    <Table
      dataSource={createDataSource()}
      columns={COLUMNS}
      pagination={false}
    />
  );
};

EmergencyAgenciesTable.propTypes = {
  emergencyAgencies: PropTypes.array.isRequired
};

export default EmergencyAgenciesTable;
