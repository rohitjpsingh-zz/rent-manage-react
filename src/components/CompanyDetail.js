import React, { Fragment, useState, useEffect } from "react";
import Layout from "./layout";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import "./css/company_detail.css";

import {
  Row,
  Col,
  Card,
  Typography,
  Select,
  DatePicker,
  Avatar,
  Image,
  Input,
  Tooltip,
  Button,
  Breadcrumb
} from "antd";
import { useTranslation, Trans } from "react-i18next";
import {
  AerrowRightIcon,
  AtIcon,
  CalendarCheckIcon,
  CoinIcon,
  DeptIcon,
  HirarchyIcon,
  MobileIcon,
  PhoneIcon,
  SalesIcon,
  SearchIcon,
  SecureKeyIcon,
  UserIcon,
  UsersIcon,
  PenIcon,
  UserCogIcon,
  PlusCircleIcon,
  PlusIcon,
  UserPlusIcon,
} from "./Icons";
import DepartmentAddModal from "./DepartmentAddModal";
import UserAddModal from "./UserAddModal";
import UserLicenseModal from "./UserLicenseModal";
import AddEditUserDepartmentModal from "./AddEditUserDepartmentModal";
import AddEditDepartmentUserModal from "./AddEditDepartmentUserModal";
import CompanyEditModal from "./CompanyEditModal";
import DepartmentEditModal from "./DepartmentEditModal";
import UserEditModal from "./UserEditModal";
import UserResetPasswordModal from "./UserResetPasswordModal";

const { Title } = Typography;
const { TextArea } = Input;

function Dashboard(props) {
  const { location } = props;
  const { t, i18n } = useTranslation();
  const [visibleDepartmentAddModal, setVisibleDepartmentAddModal] = useState(false);
  const [visibleUserAddModal, setVisibleUserAddModal] = useState(false);
  const [visibleUserLicenseModal, setVisibleUserLicenseModal] = useState(false);
  const [visibleAddEditUserDepartmentModal, setVisibleAddEditUserDepartmentModal] = useState(false);
  const [visibleAddEditDepartmentUserModal, setVisibleAddEditDepartmentUserModal] = useState(false);
  const [visibleCompanyEditModal, setVisibleCompanyEditModal] = useState(false);
  const [visibleDepartmentEditModal, setVisibleDepartmentEditModal] = useState(false);
  const [visibleUserEditModal, setVisibleUserEditModal] = useState(false);
  const [visibleUserResetPasswordModal, setVisibleUserResetPasswordModal] = useState(false);


  const randomUser = () => {
    var a = ["Rohan", "Johan", "Raj", "Rajesh", "Fedrik", "Arjun"];
    var b = ["Scholan", "Dev", "Miste", "Dejal", "Seth"];
    
    var rA = Math.floor(Math.random()*a.length);
    var rB = Math.floor(Math.random()*b.length);
    var name = a[rA] + " " + b[rB];
    return name;
  }

  return (
    <Fragment>
      <Helmet>
        <title>Property Detail</title>
      </Helmet>
      <Layout location={location}>
        <div className="company_detail_page">
          <Row>
            <Col span={24} className="main-heading">
              <Breadcrumb separator=">">
                <Breadcrumb.Item>Property Name 1</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="company_section">
                <CompanyEditModal
                  visible={visibleCompanyEditModal}
                  visibleFunc={setVisibleCompanyEditModal}
                />
                <div className="company_list">
                <Card
                        key={1}
                        title={<Title level={5}>Property Name 1</Title>}
                        extra={
                          <div style={{ display: "flex" }}>
                            {/* <img src={`assets/images/flag_icon.svg`} /> */}
                            <span style={{ display: "flex", cursor:"pointer" }} onClick={() => setVisibleCompanyEditModal(true)}>
                              <PenIcon height={15} width={15} />
                            </span>
                          </div>
                        }
                        className="company-card"
                      >
                        <Row>
                          <Col span={24}>
                            A-14, Trupti Nagar-A, Nr. Bamroli Road, Pandesara, Surat
                          </Col>
                          <Col span={24}>India - 395023</Col>
                          <Col span={24} className="stastic-main">
                            <div className={"stastic-div"}>
                              <div>
                                <span className="st-sicon">
                                  <CoinIcon height={15} />
                                </span>
                                <span className="st-stext">3500</span>
                              </div>
                            </div>
                            <div className={"stastic-div"}>
                              <div>
                                <span className="st-sicon">
                                  <HirarchyIcon height={18} width={18} />
                                </span>
                                <span className="st-stext">33</span>
                              </div>
                            </div>
                            <div className={"stastic-div"}>
                              <div>
                                <span className="st-sicon">
                                  <UsersIcon eight={18} width={18} />
                                </span>
                                <span className="st-stext">33</span>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                  <Card
                    key={2}
                    title={<Title level={5}>Notes</Title>}
                    className="company-card"
                  >
                    <Row>
                      <Col span={24}>
                        <TextArea rows={5} className="note_text_area" />
                      </Col>
                      <Col span={24} className="note_btn_section">
                        <Button type="link" className="cancel_btn">
                          Cancel
                        </Button>
                        <Button type="primary" className="save_btn">
                          Save
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="user_section">
                <UserAddModal
                  visible={visibleUserAddModal}
                  visibleFunc={setVisibleUserAddModal}
                />
                <UserLicenseModal
                  visible={visibleUserLicenseModal}
                  visibleFunc={setVisibleUserLicenseModal}
                />
                <AddEditUserDepartmentModal
                  visible={visibleAddEditUserDepartmentModal}
                  visibleFunc={setVisibleAddEditUserDepartmentModal}
                />
                <UserEditModal
                  visible={visibleUserEditModal}
                  visibleFunc={setVisibleUserEditModal}
                />
                <UserResetPasswordModal
                  visible={visibleUserResetPasswordModal}
                  visibleFunc={setVisibleUserResetPasswordModal}
                />
                <Title level={5} className="heading">
                  Tenants
                </Title>
                <div className="user_list">
                  {Array.from(new Array(5), (val, index) => index + 1).map(
                    (item) => (
                      <Card
                        key={item}
                        title={<Title level={5}>Ratan Tata</Title>}
                        extra={
                          <div style={{ display: "flex" }}>
                            {/* <img src={`assets/images/flag_icon.svg`} /> */}
                            <span style={{ display: "flex", cursor:"pointer" }} onClick={() => setVisibleUserEditModal(true)}>
                              <PenIcon height={15} width={15} />
                            </span>
                          </div>
                        }
                        className="user-card"
                      >
                        <Row>
                          <Col span={24}>Property Name 1 | Room 11</Col>
                          <Col span={24}>
                            <div className="ucard-cnt">
                              <AtIcon height={13} width={13} />
                              <a href="mailto:johan@rukkor.com">
                                johan@rukkor.com
                              </a>
                            </div>
                          </Col>
                          <Col span={24}>
                            <div className="ucard-cnt">
                              <PhoneIcon height={13} width={13} />
                              <a href="tel:(+46) 0411 - 23 66 96">
                                (+46) 0411 - 23 66 96
                              </a>
                            </div>
                          </Col>
                          <Col span={24}>
                            <div className="ucard-cnt">
                              <MobileIcon height={13} width={13} />
                              <a href="tel:(+46) 0411 - 23 66 96">
                                (+46) 073 - 03 07 323
                              </a>
                            </div>
                          </Col>
                          <Col span={24} className="ustastic-main">
                            {/* <div className={"ustastic-div"} onClick={() => setVisibleUserLicenseModal(true)}>
                              <div>
                                <span className="st-sicon">
                                  <SalesIcon height={15} width={15} />
                                </span>
                                <span className="st-stext">Sales</span>
                              </div>
                            </div> */}
                            <div className={"ustastic-div"}>
                              <div>
                                <span className="st-sicon">
                                  <UsersIcon height={17} width={17} />
                                </span>
                                <span className="st-stext">5</span>
                              </div>
                            </div>
                            <div className={"ustastic-div"}>
                              <div>
                                <span className="st-sicon">
                                  <CalendarCheckIcon height={15} width={15} />
                                </span>
                                <span className="st-stext">2022-01-01</span>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    )
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24} className="bottom_footer">
              <Button className="footer-btn" type="primary"  onClick={() => setVisibleUserAddModal(true)}>
                <div style={{display:"flex",justifyContent:'center'}}>
                  <span style={{marginRight:"5px"}}><UserPlusIcon height={18} width={18} /></span>
                  <span>Add Tenant</span>
                </div>
              </Button>
            </Col>
          </Row>
        </div>
      </Layout>
    </Fragment>
  );
}
export default Dashboard;
