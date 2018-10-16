import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from "antd";

import NavBar from "@components/common/NavBar";
import * as styles from "./style.scss";

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  state = {
    redirect: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const { username, password } = values;
        if (username === "admin" && password === "admin") {
          this.setState({ redirect: true });
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    if (this.state.redirect) return <Redirect to="/staff/dashboard" />;
    return (
      <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
        <FormItem>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <Button
            type="primary"
            htmlType="submit"
            className={styles.loginButton}
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

// eslint-ignore-next-line
class PageLogin extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <div className={styles.header}>Staff Login</div>
            <div className={styles.form}>
              <WrappedNormalLoginForm />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

NormalLoginForm.propTypes = {
  form: PropTypes.object.isRequired
};

export default PageLogin;
