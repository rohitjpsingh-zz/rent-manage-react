import React, { Fragment } from "react";
import "./css/user_license_modal.css";

import {
  Modal,
  Button,
  Row,
  Col,
  Input,
  Form,
  Select,
  DatePicker,
  Divider,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  AtIcon,
  CalendarCheckIcon,
  MobileIcon,
  PhoneIcon,
  SalesIcon,
  UserIcon,
} from "./Icons";

function UserLicenseModal(props) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const current_user_id = useSelector(
    (state) => (state.auth && state.auth.user._id) || ""
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
        title="Edit License"
        visible={props.visible}
        centered
        footer={[
          <Button
            type="text"
            className="user_license_cancel_btn"
            onClick={closeAddModal}
          >
            Cancel
          </Button>,
          <Button
            type="primary"
            className="user_license_submit_btn"
            onClick={() => form.submit()}
          >
            Save
          </Button>,
        ]}
        onCancel={closeAddModal}
        className="user_license_add_modal"
        destroyOnClose={true}
      >
        <Row>
          <Col span={24}>
            <Form
              form={form}
              layout="vertical"
              className="user_license_add_form"
              onFinish={onFinish}
            >              
                <Row>
                  <Col span={2} >
                    <span className="st-sicon">
                      <SalesIcon height={15} width={15} />
                    </span>
                  </Col>
                  <Col span={22}>
                    <Form.Item
                        name={"sales"}
                        rules={[
                        {
                            required: true,
                            message: "Field Required!",
                        },
                        ]}
                        hasFeedback
                    >
                    <Select
                      placeholder="Select Days"
                      showSearch
                      filterOption={(input, option) => {
                        return (
                          option.key
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0 ||
                          option.title
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        );
                      }}
                      allowClear
                    >
                      {[
                        "trial",
                        "trial-expired",
                        "30-days",
                        "90-days",
                        "365-days",
                        "developer",
                        "sales",
                        "educational",
                        "other",
                        "cancelled",
                        "cancelled-expired",
                        "unlimited",
                      ].map((day, index) => (
                        <Select.Option key={index} title={day} value={day}>
                          {day}
                        </Select.Option>
                      ))}
                    </Select>
                    </Form.Item>
                  </Col>
                </Row>
              

                <Row>
                  <Col span={2} >
                    <span className="st-sicon">
                        <UserIcon height={15} width={15} />
                    </span>
                  </Col>
                  <Col span={22}>
                    <Form.Item
                        name={"roles"}
                        rules={[
                        {
                            required: true,
                            message: "Field Required!",
                        },
                        ]}
                        hasFeedback
                    >
                    <Select
                      placeholder="Select Roles"
                      showSearch
                      filterOption={(input, option) => {
                        return (
                          option.key
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0 ||
                          option.title
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        );
                      }}
                      allowClear
                    >
                      {["creator", "viewer"].map((day1, index1) => (
                        <Select.Option key={index1} title={day1} value={day1}>
                          {day1}
                        </Select.Option>
                      ))}
                    </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Row>
                  <Col span={2} >
                    <span className="st-sicon">
                        <CalendarCheckIcon height={15} width={15} />
                    </span>
                  </Col>
                  <Col span={22}>
                    <Form.Item
                        name={"expiry"}
                        rules={[
                        {
                            required: true,
                            message: "Field Required!",
                        },
                        ]}
                        hasFeedback
                    >
                        <DatePicker placeholder="Expiry Date" style={{ width: "100%" }} />
                    </Form.Item>
                  </Col>
                </Row>
            </Form>
          </Col>
        </Row>
      </Modal>
    </Fragment>
  );
}

export default UserLicenseModal;
