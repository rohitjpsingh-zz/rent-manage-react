import React, { Fragment } from "react";
import "./css/add_edit_department_user_modal.css";

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
  HirarchyIcon,
  MobileIcon,
  PhoneIcon,
  SalesIcon,
  UserIcon,
  UserMinusIcon,
  UserPlusIcon,
} from "./Icons";

function AddEditDepartmentUserModal(props) {
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
        title="Add/Remove Members"
        visible={props.visible}
        centered
        footer={false}
        onCancel={closeAddModal}
        className="depart_user_add_edit_modal"
        destroyOnClose={true}
        width={450}
      >
        <div className="member-section">
          <h3>Members</h3>
          <div className="active-member">
            {[1, 2].map((mem) => (
              <Row key={mem} className="members-div">
                <Col xl={3} sm={3} md={3} xs={5} lg={3}>
                  <span className="st-icon">
                    <UserIcon />
                  </span>
                </Col>
                <Col xl={19} sm={19} md={19} xs={17} lg={19}>Member {mem}</Col>
                <Col xl={2} sm={2} md={2} xs={2} lg={2}>
                  <span className="st-icon2">
                    <UserMinusIcon />
                  </span>
                </Col>
              </Row>
            ))}
          </div>
          <Divider />
          <h3>Available</h3>
          <div className="available-member">
            {[1, 2, 3, 5].map((mem) => (
              <Row key={mem} className="members-div">
                <Col xl={3} sm={3} md={3} xs={5} lg={3}>
                  <span className="st-icon">
                    <UserIcon />
                  </span>
                </Col>
                <Col xl={19} sm={19} md={19} xs={17} lg={19}>User {mem}</Col>
                <Col xl={2} sm={2} md={2} xs={2} lg={2}>
                  <span className="st-icon2">
                    <UserPlusIcon height={18} width={18} />
                  </span>
                </Col>
              </Row>
            ))}
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}

export default AddEditDepartmentUserModal;
