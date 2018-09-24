import React from "react";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Checkbox,
  Button
} from "antd";

import NavBar from "src/components/NavBar";
import Footer from "src/components/Footer";

import * as styles from "./style.scss";

const FormItem = Form.Item;
const Option = Select.Option;

const residences = [
  {
    value: "ambulance",
    label: "Emergency Ambulance"
  },
  {
    value: "rescue",
    label: "Rescue and Evacuation"
  },
  {
    value: "fire",
    label: "Fire Fighting"
  },
  {
    value: "gas",
    label: "Gas Leak Control"
  },
  {
    value: "others",
    label: "Others, please specify"
  }
];

class IncidentReportForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "65"
    })(
      <Select style={{ width: 70 }}>
        <Option value="65">+65</Option>
      </Select>
    );

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label={
            <span>
              Your Name&nbsp;
              <Tooltip title="Your real name">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("nickname", {
            rules: [
              {
                required: true,
                message: "Please input your name!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={
            <span>
              Location&nbsp;
              <Tooltip title="Postal code and building unit number, if applicable">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("location", {
            rules: [
              {
                required: true,
                message: "Please input the location!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Crisis Type">
          {getFieldDecorator("residence", {
            rules: [
              {
                type: "array",
                required: true,
                message: "Please select assistance type!"
              }
            ]
          })(<Cascader options={residences} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Crisis Description">
          {getFieldDecorator("others", {
            rules: [{ required: false }]
          })(
            <Input
              style={{ width: "100%" }}
              placeholder="Describe the crisis that you are reporting"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Assistance Type">
          {getFieldDecorator("residence", {
            rules: [
              {
                type: "array",
                required: false,
                message: "Please select assistance type!"
              }
            ]
          })(<Cascader options={residences} />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Assistance Description">
          {getFieldDecorator("others", {
            rules: [{ required: false }]
          })(
            <Input
              style={{ width: "100%" }}
              placeholder="If you selected others, specify your assistance request here"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Mobile Number">
          {getFieldDecorator("phone", {
            rules: [
              { required: true, message: "Please input your mobile number!" }
            ]
          })(<Input addonBefore={prefixSelector} style={{ width: "100%" }} />)}
        </FormItem>
        {/* <FormItem {...formItemLayout} label="Website">
          {getFieldDecorator("website", {
            rules: [{ required: true, message: "Please input website!" }]
          })(
            <AutoComplete
              dataSource={websiteOptions}
              onChange={this.handleWebsiteChange}
              placeholder="website"
            >
              <Input />
            </AutoComplete>
          )}
        </FormItem> */}
        {/* <FormItem
          {...formItemLayout}
          label="Captcha"
          extra="We must make sure that your are a human."
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator("captcha", {
                rules: [
                  {
                    required: true,
                    message: "Please input the captcha you got!"
                  }
                ]
              })(<Input />)}
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </FormItem> */}
        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator("agreement", {
            valuePropName: "checked"
          })(
            <Checkbox>
              I understand that fake report is a breach of law and I will be
              arrested 2333.
            </Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

class PageReport extends React.Component {
  render() {
    const IRF = Form.create()(IncidentReportForm);
    return (
      <React.Fragment>
        <NavBar />
        <div className={styles.container}>
          <div className={styles.header}>Report Crisis</div>
          <div className={styles.form}>
            <IRF />
          </div>
          <div style={{ marginTop: "1rem" }}>
            Alternatively, call us directly at <strong>12345678</strong>.
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default PageReport;
