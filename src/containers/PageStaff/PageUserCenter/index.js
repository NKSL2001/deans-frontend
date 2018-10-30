import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUserList } from "@redux/actions";
import { Button } from "antd";
import UserTable from "@components/PageStaff/UserTable";
import * as styles from "./style.scss";

class PageUserCenter extends React.Component {
  componentDidMount() {
    this.props.getUserList();
  }

  render() {
    return (
      <div>
        <h1>User Center</h1>
        <div className={styles.subHeader}>
          <div className={styles.item}>User List</div>
          <div className={styles.item}>
            <Button>Add user</Button>
          </div>
        </div>
        <div className={styles.userTable}>
          <UserTable userList={this.props.userList || []} />
        </div>
      </div>
    );
  }
}

PageUserCenter.propTypes = {
  userList: PropTypes.array.isRequired,
  getUserList: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { staff } = state;
  return {
    userList: staff && staff.userList
  };
};

const mapDispatchToProps = dispatch => ({
  getUserList: () => dispatch(getUserList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageUserCenter);
