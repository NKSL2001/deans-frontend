import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
// import * as styles from "./style.scss";

const dataSource = [
  {
    key: "1",
    crisisType: "Fire",
    location: "Jurong West",
    description: "Fire in the hole!"
  },
  {
    key: "2",
    crisisType: "Injury",
    location: "Marina Bay Sand",
    description: ""
  },
  {
    key: "3",
    crisisType: "Injury",
    location: "One North",
    description: ""
  }
];

const ActiveCrisisListTable = () => {
  const COLUMNS = [
    {
      title: "Crisis Type",
      dataIndex: "crisisType",
      key: "crisisType"
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location"
    },
    {
      title: "Description",
      key: "description",
      dataIndex: "description"
    }
  ];
  return <Table dataSource={dataSource} columns={COLUMNS} />;
};

ActiveCrisisListTable.propTypes = {
  editCrisis: PropTypes.func.isRequired,
  dispatchCrisis: PropTypes.func.isRequired
};

export default ActiveCrisisListTable;
