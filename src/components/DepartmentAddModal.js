import React, { Fragment } from "react";
import "./css/department_add_modal.css";

import { Modal, Button, Row, Col, Input, Form, Select, DatePicker, Divider } from "antd";
import { useSelector, useDispatch } from "react-redux";

function DepartmentAddModal(props) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const current_user_id = useSelector(
    (state) => (state.auth && state.auth.user && state.auth.user._id) || ""
  );

  const onFinish = async (form_values) => {
    console.log("Received values of form: ", form_values);
    // closeAddModal();
  };

  const closeAddModal = () => {
    props.visibleFunc(false);
    form.resetFields();
  };

  return (
    <Fragment>
      <Modal
        title="New Department"
        visible={props.visible}
        centered
        footer={[
          <Button
            type="text"
            className="department_cancel_btn"
            onClick={closeAddModal}
          >
            Cancel
          </Button>,
          <Button
            type="primary"
            className="department_submit_btn"
            onClick={() => form.submit()}
          >
            Save
          </Button>,
        ]}
        onCancel={closeAddModal}
        className="department_add_modal"
        destroyOnClose={true}
      >
        <Row>
          <Col span={24}>
            <Form
              form={form}
              layout="vertical"
              className="department_add_form"
              onFinish={onFinish}
            >
              <Form.Item
                name={"department_name"}
                rules={[
                    {
                    required: true,
                    message: "Field Required!",
                    },
                ]}
                hasFeedback
                >
                <Input placeholder="Department name" />
                </Form.Item>
            </Form>
          </Col>
        </Row>
      </Modal>
    </Fragment>
  );
}

export default DepartmentAddModal;
