import React from "react";
import PropTypes from "prop-types";
import Modal from "antd/lib/modal";
import { Form, Input, Icon, Button } from "antd";
import * as styles from "./style.scss";

const FormItem = Form.Item;

class _Form extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { value } = values;
        this.props.handler(value);
        this.props.hideModal();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator("value", {
            rules: [{ required: true, message: "Please input values!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="text"
              placeholder="Input values..."
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.createButton}
          >
            Confirm
          </Button>
        </FormItem>
      </Form>
    );
  }
}

_Form.propTypes = {
  form: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired
};

const SingleInput = props => {
  const EmbedForm = Form.create()(_Form);
  const { handler, hideModal } = props;
  return (
    <Modal
      centered
      title={props.title}
      visible
      onCancel={props.hideModal}
      footer={null}
    >
      <EmbedForm handler={handler} hideModal={hideModal} />
    </Modal>
  );
};

SingleInput.propTypes = {
  hideModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

export default SingleInput;
