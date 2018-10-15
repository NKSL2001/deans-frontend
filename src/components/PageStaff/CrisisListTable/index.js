import React from "react";
import { Button, Table } from "antd";

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
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: () => (
      <React.Fragment>
        <Button type="dashed">Edit</Button>
        <Button>Dispatch</Button>
        <Button type="danger">Resolve</Button>
      </React.Fragment>
    )
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status"
  }
];

const dataSource = [
  {
    key: "1",
    crisisType: "Fire",
    location: "Jurong West",
    status: "Pending dispatch"
  },
  {
    key: "2",
    crisisType: "Injury",
    location: "Marina Bay Sand",
    status: "Dispatched"
  },
  {
    key: "2",
    crisisType: "Injury",
    location: "One North",
    status: "Resolved"
  }
];

const CrisisListTable = () => (
  <Table dataSource={dataSource} columns={COLUMNS} />
);

export default CrisisListTable;
