import React from "react";
import PropTypes from "prop-types";
import Modal from "antd/lib/modal";
import { Form, Input, Icon, Checkbox, Button } from "antd";
import * as styles from "./style.scss";

const FormItem = Form.Item;

class _EditUserForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password, isAdmin } = values;
        const form = new FormData();
        form.append("username", username);
        form.append("password", password);
        form.append("is_staff", isAdmin);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("isAdmin", {
            valuePropName: "checked",
            initialValue: false
          })(
            <Checkbox className={styles.check}>
              This user is an admin user
            </Checkbox>
          )}
          <Button
            type="primary"
            htmlType="submit"
            className={styles.createButton}
          >
            Edit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

_EditUserForm.propTypes = {
  form: PropTypes.object.isRequired,
  editUser: PropTypes.func.isRequired
};

const EditUser = props => {
  const EditUserForm = Form.create()(_EditUserForm);
  const { editUser } = props;
  return (
    <Modal
      centered
      title="EDIT USER"
      visible
      onCancel={props.hideModal}
      footer={null}
    >
      <EditUserForm editUser={editUser} />
    </Modal>
  );
};

EditUser.propTypes = {
  hideModal: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired
};

export default EditUser;
