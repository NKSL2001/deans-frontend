import React from "react";
import { Layout, Form, Icon, Input, Button, Checkbox } from "antd";

import NavBar from "src/components/NavBar";
import _Footer from "src/components/Footer";
import "./style.scss";

const { Header, Content, Footer } = Layout;

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }],
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
            className="login-form-button"
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
      <Layout>
        <Header>
          <NavBar />
        </Header>
        <Content style={{ padding: "0 50px", textAlign: "center" }}>
          <div
            style={{
              fontWeight: "bold",
              marginTop: "2rem",
              fontSize: "1.5rem"
            }}
          >
            Call Center Operator Login
          </div>
          <div style={{ marginTop: "1rem" }}>
            <WrappedNormalLoginForm />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <_Footer />
        </Footer>
      </Layout>
    );
  }
}

export default PageLogin;
