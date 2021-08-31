import React, { Fragment } from "react";
import "./css/company_edit_modal.css";

import { Modal, Button, Row, Col, Input, Form, Select, DatePicker, Divider } from "antd";
import { useSelector, useDispatch } from "react-redux";

function CompanyEditModal(props) {
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
        title="Edit Property"
        visible={props.visible}
        centered
        footer={[
          <Button
            type="text"
            className="company_edit_cancel_btn"
            onClick={closeAddModal}
          >
            Cancel
          </Button>,
          <Button
            type="primary"
            className="company_edit_submit_btn"
            onClick={() => form.submit()}
          >
            Save
          </Button>,
        ]}
        onCancel={closeAddModal}
        className="company_edit_modal"
        destroyOnClose={true}
      >
        <Row gutter={[5]}>
            <Col span={18}>
              <Form.Item
                // label={"Property Name"}
                name={"property_name"}
                rules={[
                  {
                    required: true,
                    message: "Field Required!",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder={"Property Name"} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                // label={"Total Room"}
                name={"total_room"}
                rules={[
                  {
                    required: true,
                    message: "Field Required!",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder={"Total Room"} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[5]}>
            <Col span={12}>
              <Form.Item
                // label={"Price/Room"}
                name={"room_price"}
                rules={[
                  {
                    required: true,
                    message: "Field Required!",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder={"Price/Room"} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                // label={"Limit Tenants"}
                name={"limit_tenant"}
                rules={[
                  {
                    required: true,
                    message: "Field Required!",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder={"Limit Tenants"} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[5]}>
            <Col span={24}>
              <Form.Item
                // label={"Address 1"}
                name={"address_1"}
                rules={[
                  {
                    required: true,
                    message: "Field Required!",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder={"Address 1"} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[5]}>
            <Col span={12}>
              <Form.Item
                // label={"Locality"}
                name={"locality"}
                rules={[
                  {
                    required: true,
                    message: "Field Required!",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder={"Locality"} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                // label={"City"}
                name={"city"}
                rules={[
                  {
                    required: true,
                    message: "Field Required!",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder={"City"} />
              </Form.Item>
            </Col>
          </Row>
          
          <Row gutter={[5]}>
            <Col span={12}>
              <Form.Item
                // label={"Pincode"}
                name={"pincode"}
                rules={[
                  {
                    required: true,
                    message: "Field Required!",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder={"Pincode"} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                // label={"Country"}
                name={"country"}
                rules={[
                  {
                    required: true,
                    message: "Field Required!",
                  },
                ]}
                hasFeedback
              >
                <Input placeholder={"Country"} />
              </Form.Item>
            </Col>
          </Row>
      </Modal>
    </Fragment>
  );
}

export default CompanyEditModal;
