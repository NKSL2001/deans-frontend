import React from "react";
import { Button, Input, Tag } from "antd";
import * as styles from "./style.scss";

class PageSetting extends React.Component {
  state = {
    reportingEmail: {
      edited: false,
      content: null
    }
  };

  handleEmailChange = e => {
    this.setState({
      ...this.state,
      reportingEmail: {
        edited: true,
        content: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Setting</h1>
        <div className={styles.subHeader}>
          <div>Crisis Type</div>
          <Button>Add</Button>
        </div>
        <div className={styles.tagContainer}>
          <Tag color="purple">Casualty</Tag>
          <Tag color="purple">Hazardous Air Condition</Tag>
          <Tag color="purple">Fire Breakout</Tag>
          <Tag color="purple">Gas Leaks</Tag>
        </div>
        <div className={styles.subHeader}>
          <div>Assistance Type</div>
          <Button>Add</Button>
        </div>
        <div className={styles.tagContainer}>
          <Tag color="geekblue">Emergency Ambulance</Tag>
          <Tag color="geekblue">Rescue and Evacuation</Tag>
          <Tag color="geekblue">Fire Fighting</Tag>
          <Tag color="geekblue">Gas Leak Control</Tag>
        </div>
        {/* <div className={styles.subHeader}>
          <div>Social Media Account</div>
        </div> */}
        {/* <div className={styles.socialMediaAccountContainer}>
          <div className={styles.item + " " + styles.label}>Social Media</div>
          <div className={styles.item + " " + styles.label}>Account</div>
          <div className={styles.item + " " + styles.label}>Password</div>
          <div className={styles.item + " " + styles.label}>Actions</div>
          <div className={styles.item}>Facebook</div>
          <div className={styles.item}>
            <Input type="text" defaultValue="john.doe@gmail.com" />
          </div>
          <div className={styles.item}>
            <Input type="password" defaultValue="123123" />
          </div>
          <div className={styles.item}>
            <div className={styles.actions}>
              <Button type="primary">Save</Button>
              <Button type="danger">Delete</Button>
            </div>
          </div>
          <div className={styles.item}>Twitter</div>
          <div className={styles.item}>
            <Input type="text" defaultValue="john.doe@gmail.com" />
          </div>
          <div className={styles.item}>
            <Input type="password" defaultValue="123123" />
          </div>
          <div className={styles.item}>
            <div className={styles.actions}>
              <Button type="primary" disabled>Save</Button>
              <Button type="danger">Delete</Button>
            </div>
          </div>
        </div> */}
        <div className={styles.subHeader}>
          <div>Emergency Agencies</div>
          <Button>Add</Button>
        </div>
        <div className={styles.emergencyAgenciesContainer}>
          <div className={styles.item + " " + styles.label}>Agency</div>
          <div className={styles.item + " " + styles.label}>Phone Number</div>
          <div className={styles.item + " " + styles.label}>Actions</div>
          <div className={styles.item}>Singapore Civil Defence Force</div>
          <div className={styles.item}>
            <Input defaultValue="12345678" />
          </div>
          <div className={styles.item}>
            <div className={styles.actions}>
              <Button type="primary">Save</Button>
              <Button type="danger">Delete</Button>
            </div>
          </div>
          <div className={styles.item}>Singapore Power</div>
          <div className={styles.item}>
            <Input defaultValue="12345678" />
          </div>
          <div className={styles.item}>
            <div className={styles.actions}>
              <Button type="primary">Save</Button>
              <Button type="danger">Delete</Button>
            </div>
          </div>
          <div className={styles.item}>Ministry of Truth</div>
          <div className={styles.item}>
            <Input defaultValue="12345678" />
          </div>
          <div className={styles.item}>
            <div className={styles.actions}>
              <Button type="primary">Save</Button>
              <Button type="danger">Delete</Button>
            </div>
          </div>
        </div>
        <div className={styles.subHeader}>
          <div>Summary Reporting Email</div>
          <Button type="primary" disabled={!this.state.reportingEmail.edited}>
            Save
          </Button>
        </div>
        <div className={styles.summaryReportingEmailContainer}>
          <Input
            defaultValue="prime-minister@gmail.com"
            onChange={this.handleEmailChange}
          />
        </div>
      </div>
    );
  }
}

export default PageSetting;
