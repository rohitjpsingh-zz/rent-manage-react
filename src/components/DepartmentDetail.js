import React, { Fragment, useState, useEffect } from "react";
import Layout from "./layout";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import "./css/department_detail.css";

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
} from "./Icons";
import UserLicenseModal from "./UserLicenseModal";
import AddEditUserDepartmentModal from "./AddEditUserDepartmentModal";
import AddEditDepartmentUserModal from "./AddEditDepartmentUserModal";
import DepartmentEditModal from "./DepartmentEditModal";
import UserResetPasswordModal from "./UserResetPasswordModal";

const { Title } = Typography;
const { TextArea } = Input;

function Dashboard(props) {
  const { location } = props;
  const { t, i18n } = useTranslation();

  const [visibleUserLicenseModal, setVisibleUserLicenseModal] = useState(false);
  const [visibleAddEditUserDepartmentModal, setVisibleAddEditUserDepartmentModal] = useState(false);
  const [visibleAddEditDepartmentUserModal, setVisibleAddEditDepartmentUserModal] = useState(false);
  const [visibleDepartmentEditModal, setVisibleDepartmentEditModal] = useState(false);
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
        <title>Dashboard</title>
      </Helmet>
      <Layout location={location}>
        <div className="department_detail_page">
          <Row>
            <Col span={24} className="main-heading">
              <Breadcrumb separator=">">
                <Breadcrumb.Item><NavLink to="/">Rukkor AB</NavLink></Breadcrumb.Item>
                <Breadcrumb.Item>Demo</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          
          <Row>
            <Col span={24}>
              <div className="department_section">
                <AddEditDepartmentUserModal
                  visible={visibleAddEditDepartmentUserModal}
                  visibleFunc={setVisibleAddEditDepartmentUserModal}
                />
                <DepartmentEditModal
                  visible={visibleDepartmentEditModal}
                  visibleFunc={setVisibleDepartmentEditModal}
                />
                <div className="department_list">
                <Card
                        key={22}
                        title={<Title level={5}>{randomUser()}</Title>}
                        extra={
                          <span style={{ display: "flex", cursor:'pointer' }} onClick={() => setVisibleDepartmentEditModal(true)}>
                            <PenIcon height={15} width={15} />
                          </span>
                        }
                        className="department-card"
                      >
                        <Row>
                          <Col span={24} className="dstastic-main">
                            <div className={"dstastic-div"} onClick={() => setVisibleAddEditDepartmentUserModal(true)}>
                              <div>
                                <span className="st-sicon">
                                  <UserCogIcon height={18} width={18} />
                                </span>
                                <span className="st-stext">Manage</span>
                              </div>
                            </div>
                            <div className={"dstastic-div remove-bg"}>
                              <div>
                                <span className="st-sicon">
                                  <UsersIcon eight={18} width={18} />
                                </span>
                                <span className="st-stext">2</span>
                              </div>
                            </div>
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
                <UserLicenseModal
                  visible={visibleUserLicenseModal}
                  visibleFunc={setVisibleUserLicenseModal}
                />
                <AddEditUserDepartmentModal
                  visible={visibleAddEditUserDepartmentModal}
                  visibleFunc={setVisibleAddEditUserDepartmentModal}
                />
                <UserResetPasswordModal
                  visible={visibleUserResetPasswordModal}
                  visibleFunc={setVisibleUserResetPasswordModal}
                />
                <Title level={5} className="heading">
                  Users
                </Title>
                <div className="user_list">
                  {Array.from(new Array(5), (val, index) => index + 1).map(
                    (item) => (
                      <Card
                        key={item}
                        title={<NavLink
                          to={`/user-detail/${item}`}
                          className="nav-text"
                        >
                          {randomUser()}
                        </NavLink>}
                        extra={<img src={`assets/images/flag_icon.svg`} />}
                        className="user-card"
                      >
                        <Row>
                          <Col span={24}>3250 | 3612745-123</Col>
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
                            <div className={"ustastic-div"} onClick={() => setVisibleUserLicenseModal(true)}>
                              <div>
                                <span className="st-sicon">
                                  <SalesIcon height={15} width={15} />
                                </span>
                                <span className="st-stext">Sales</span>
                              </div>
                            </div>
                            <div className={"ustastic-div"} onClick={() => setVisibleUserLicenseModal(true)}>
                              <div>
                                <span className="st-sicon">
                                  <UserIcon height={15} width={15} />
                                </span>
                                <span className="st-stext">Creator</span>
                              </div>
                            </div>
                            <div className={"ustastic-div"} onClick={() => setVisibleUserLicenseModal(true)}>
                              <div>
                                <span className="st-sicon">
                                  <CalendarCheckIcon height={15} width={15} />
                                </span>
                                <span className="st-stext">2022-01-01</span>
                              </div>
                            </div>
                            <div className={"ustastic-div"} onClick={() => setVisibleAddEditUserDepartmentModal(true)}>
                              <div>
                                <span className="st-sicon">
                                  <HirarchyIcon height={18} width={18} />
                                </span>
                                <span className="st-stext">1</span>
                              </div>
                            </div>
                            <div className={"ustastic-div secure-key-icon"}>
                              <div>
                                <span className="st-sicon">
                                  <AerrowRightIcon height={15} width={15} />
                                </span>
                                <span className="st-stext">9y 11m 30d</span>
                              </div>
                            </div>
                            <div className={"ustastic-div"} onClick={() => setVisibleUserResetPasswordModal(true)}>
                              <div>
                                <span className="st-sicon">
                                  <SecureKeyIcon height={15} width={15} />
                                </span>
                                <span className="st-stext">Reset</span>
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
        </div>
      </Layout>
    </Fragment>
  );
}
export default Dashboard;
