import React, { Fragment } from "react";
import "./css/user_add_modal.css";

import { Modal, Button, Row, Col, Input, Form, Select, DatePicker, Divider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { AtIcon, MobileIcon, PhoneIcon } from "./Icons";
import moment from 'moment-timezone';


function UserAddModal(props) {
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
        title="New Tenant"
        visible={props.visible}
        centered
        footer={[
          <Button
            type="text"
            className="user_cancel_btn"
            onClick={closeAddModal}
          >
            Cancel
          </Button>,
          <Button
            type="primary"
            className="user_submit_btn"
            onClick={() => form.submit()}
          >
            Save
          </Button>,
        ]}
        onCancel={closeAddModal}
        className="user_add_modal"
        destroyOnClose={true}
      >
        <Row>
          <Col span={24}>
            <Form
              form={form}
              layout="vertical"
              className="user_edit_form"
              onFinish={onFinish}
            >
              <Row gutter={[5]}>
                <Col span={12}>
                  <Form.Item
                    name={"first_name"}
                    rules={[
                      {
                        required: true,
                        message: "Field Required!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name={"last_name"}
                    rules={[
                      {
                        required: true,
                        message: "Field Required!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>
                </Col>                
              </Row>

              <Row gutter={[5]}>
                <Col span={24}>
                  <Form.Item
                    name={"property_name"}
                    rules={[
                      {
                        required: true,
                        message: "Field Required!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Select
                      showSearch
                      placeholder="Property Name"
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
                    >
                      {Array.from(new Array(5), (val, index) => index + 1)
                        .length > 0
                        ? Array.from(
                            new Array(5),
                            (val, index) => index + 1
                          ).map((data) => (
                            <Select.Option
                              key={data}
                              title={`Property Name ${data}`}
                              value={`Property Name ${data}`}
                            >
                              {`Property Name ${data}`}{" "}
                            </Select.Option>
                          ))
                        : null}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[5]}>
                <Col span={24}>
                  <Form.Item
                    name={"room"}
                    rules={[
                      {
                        required: true,
                        message: "Field Required!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input placeholder="Room Detail" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[5]}>
                <Col span={12}>
                  <Form.Item
                    name={"adult_count"}
                    rules={[
                      {
                        required: true,
                        message: "Field Required!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input placeholder="Total Adults" />
                  </Form.Item>                  
                </Col>
                <Col span={12}>                 
                  <Form.Item
                    name={"child_count"}
                    rules={[
                      {
                        required: true,
                        message: "Field Required!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input placeholder="Total Childs" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[5]}>
                <Col span={12}>
                  <Form.Item
                    name={"dept_amt"}
                    rules={[
                      {
                        required: true,
                        message: "Field Required!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input placeholder="Deposite Amount" />
                  </Form.Item>                  
                </Col>
                <Col span={12}>                 
                  <Form.Item
                    name={"dept_dt"}
                    rules={[
                      {
                        required: true,
                        message: "Field Required!",
                      },
                    ]}
                    hasFeedback
                  >
                    <DatePicker
                      style={{width:'100%'}}
                      placeholder="Deposite Amount Date"
                      format="YYYY-MM-DD HH:mm:ss"
                      showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[5]}>
                <Col span={24}>
                  <Form.Item
                    name={"ag_dt"}
                    rules={[
                      {
                        required: true,
                        message: "Field Required!",
                      },
                    ]}
                    hasFeedback
                  >
                    <DatePicker
                      style={{width:'100%'}}
                      placeholder="Agreement Start Date"
                      format="YYYY-MM-DD HH:mm:ss"
                      showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                    />
                  </Form.Item>                  
                </Col>
              </Row>

              <Row gutter={[5]}>
                <Col span={24}>
                  <Form.Item
                    name={"email"}
                    rules={[
                      {
                        required: true,
                        message: "Field Required!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input placeholder="Email" prefix={<AtIcon height={15} width={15} />} />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[5]}>
                <Col span={24}>
                  <Form.Item
                    name={"phone"}
                    rules={[
                      {
                        required: true,
                        message: "Field Required!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input placeholder="Phone No" prefix={<PhoneIcon height={15} width={15} />} />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={[5]}>
                <Col span={24}>
                  <Form.Item
                    name={"mobile"}
                    rules={[
                      {
                        required: true,
                        message: "Field Required!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input placeholder="Mobile No" prefix={<MobileIcon height={15} width={15} />} />
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

export default UserAddModal;
