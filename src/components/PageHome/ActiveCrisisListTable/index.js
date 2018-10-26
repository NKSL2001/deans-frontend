import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Table } from "antd";
// import * as styles from "./style.scss";

// const dataSource = [
//   {
//     key: "1",
//     crisisType: "Fire",
//     location: "Jurong West",
//     description: "Fire in the hole!"
//   },
//   {
//     key: "2",
//     crisisType: "Injury",
//     location: "Marina Bay Sand",
//     description: ""
//   },
//   {
//     key: "3",
//     crisisType: "Injury",
//     location: "One North",
//     description: ""
//   }
// ];

const createDataSource = (crisisList, crisisType) =>
  crisisList.map(crisis => {
    const key = crisis.crisis_id;
    const type = crisis.crisis_type.map(val => crisisType[val]).join(", ");
    const location = "TODO";
    const description = crisis.crisis_description;
    return {
      key: key,
      crisisType: type,
      location: location,
      description: description
    };
  });

const ActiveCrisisListTable = props => {
  const { crises, crisisType } = props;
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
  return (
    <Table
      dataSource={createDataSource(crises, crisisType)}
      columns={COLUMNS}
    />
  );
};

ActiveCrisisListTable.propTypes = {
  crisisType: PropTypes.func.isRequired,
  assistanceType: PropTypes.func.isRequired,
  crises: PropTypes.array.isRequired
};

export default connect(state => {
  const { system } = state;
  return {
    crisisType: system && system.crisisType,
    assistanceType: system && system.assistanceType
  };
})(ActiveCrisisListTable);
