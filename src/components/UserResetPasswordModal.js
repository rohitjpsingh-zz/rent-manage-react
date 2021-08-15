import React, { Fragment } from "react";
import "./css/user_reset_password_modal.css";

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
  Typography
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
const { Title } = Typography;

function UserResetPasswordModal(props) {
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
        title="Reset Password"
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
            Reset
          </Button>,
        ]}
        onCancel={closeAddModal}
        className="user_reset_password_modal"
        destroyOnClose={true}
      >
        Are you sure you wish to reset the password 
        for user: <b>Fredrik Sjöbeck</b> ?
      </Modal>
    </Fragment>
  );
}

export default UserResetPasswordModal;
