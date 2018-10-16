import React from "react";
import { Form, Input, Select, Button } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

const crisisType = [
  "Emergency Ambulance",
  "Rescue and Evacuation",
  "Fire Fighting",
  "Gas Leak Control",
  "Others (please specify in description)"
];

const assistanceType = [
  "Emergency Ambulance",
  "Rescue and Evacuation",
  "Fire Fighting",
  "Gas Leak Control",
  "Others (please specify in description)"
];

const createSelectionList = arr =>
  arr.map((value, index) => (
    <Option value={value} key={index}>
      {value}
    </Option>
  ));

class CrisisReportForm extends React.Component {
  state = {
    confirmDirty: false
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
        sm: { span: 8 }
      },
      wrapperCol: {
        sm: { span: 15 }
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
        <FormItem {...formItemLayout} label={<span>Reporter Name</span>}>
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input reporter name!",
                whitespace: true
              }
            ]
          })(<Input placeholder="Enter reporter name" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Mobile Number">
          {getFieldDecorator("phone", {
            rules: [
              { required: true, message: "Please input the mobile number!" }
            ]
          })(<Input addonBefore={prefixSelector} style={{ width: "100%" }} />)}
        </FormItem>
        <FormItem {...formItemLayout} label={<span>Location</span>}>
          {getFieldDecorator("location", {
            rules: [
              {
                required: true,
                message: "Please input the location!",
                whitespace: true
              }
            ]
          })(<Input placeholder="Enter postal code to quickly navigate" />)}
        </FormItem>
        <FormItem {...formItemLayout} label={<span>Location 2</span>}>
          {getFieldDecorator("location_2", {
            rules: [
              {
                required: false,
                whitespace: true
              }
            ]
          })(<Input placeholder="Room number, block number, street name..." />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Crisis Type">
          {getFieldDecorator("crisisType", {
            rules: [
              {
                type: "array",
                required: true,
                message: "Please select crisis type!"
              }
            ]
          })(
            <Select mode="multiple" placeholder="Please select favorite colors">
              {createSelectionList(crisisType)}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Crisis Description">
          {getFieldDecorator("crisisDescription", {
            rules: [{ required: false }]
          })(
            <Input
              style={{ width: "100%" }}
              placeholder="Anything we must know?"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Assistance Type">
          {getFieldDecorator("assistanceType", {
            rules: [
              {
                type: "array",
                required: false
              }
            ]
          })(
            <Select mode="multiple" placeholder="Select assistance(s) required">
              {createSelectionList(assistanceType)}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Assistance Description">
          {getFieldDecorator("assistanceDescription", {
            rules: [{ required: false }]
          })(
            <Input
              style={{ width: "100%" }}
              placeholder="If you selected others, specify your assistance request here"
            />
          )}
        </FormItem>
        <FormItem style={{ marginBottom: 0 }}>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(CrisisReportForm);
