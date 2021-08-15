import React, { Fragment, useState, useEffect } from "react";
import Layout from "./layout";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import "./css/dashboard.css";
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
  PenIcon,
  PhoneIcon,
  PlusIcon,
  SalesIcon,
  SearchIcon,
  SecureKeyIcon,
  UserIcon,
  UsersIcon,
} from "./Icons";
import CompanyAddModal from "./CompanyAddModal";
import UserLicenseModal from "./UserLicenseModal";
import AddEditUserDepartmentModal from "./AddEditUserDepartmentModal";
import UserResetPasswordModal from "./UserResetPasswordModal";
import CompanyEditModal from "./CompanyEditModal";
import UserEditModal from "./UserEditModal";

const { Title } = Typography;

function Dashboard(props) {
  const { location } = props;
  const { t, i18n } = useTranslation();

  const [visibleCompanyAddModal, setVisibleCompanyAddModal] = useState(false);
  const [visibleUserLicenseModal, setVisibleUserLicenseModal] = useState(false);
  const [visibleAddEditUserDepartmentModal, setVisibleAddEditUserDepartmentModal] = useState(false);
  const [visibleUserResetPasswordModal, setVisibleUserResetPasswordModal] = useState(false);
  const [visibleCompanyEditModal, setVisibleCompanyEditModal] = useState(false);
  const [visibleUserEditModal, setVisibleUserEditModal] = useState(false);

  return (
    <Fragment>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Layout location={location}>
        <div className="dashboard_page">
          <Row>
            <Col
              sm={{ span: 18, offset: 3 }}
              md={{ span: 18, offset: 3 }}
              xs={{ span: 22, offset: 1 }}
              lg={{ span: 18, offset: 3 }}
              xl={{ span: 12, offset: 6 }}
              className="main_search"
            >
              <Input
                allowClear
                placeholder="Search for Property or Tenant"
                prefix={<SearchIcon />}
                className="search_text_box"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="company_section">
              <CompanyAddModal
                visible={visibleCompanyAddModal}
                visibleFunc={setVisibleCompanyAddModal}
              />
              <CompanyEditModal
                visible={visibleCompanyEditModal}
                visibleFunc={setVisibleCompanyEditModal}
              />
                <Title level={5} className="heading">
                  Properties
                </Title>
                <div className="company_list">
                  {Array.from(new Array(5), (val, index) => index + 1).map(
                    (item) => (
                      <Card
                        key={item}
                        title={
                          <NavLink
                            to={`/property-detail/${item}`}
                            className="nav-text"
                          >
                            Property Name {item}
                          </NavLink>
                        }
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
                          {/* <Col span={24}>Total rooms : 20 </Col> */}
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
                    )
                  )}
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
                <UserEditModal
                  visible={visibleUserEditModal}
                  visibleFunc={setVisibleUserEditModal}
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
              <Button className="footer-btn" type="primary" onClick={() => setVisibleCompanyAddModal(true)}>
                <div style={{display:"flex",justifyContent:'center'}}>
                  <span style={{marginRight:"5px"}}><PlusIcon height={14} width={14} /></span>
                  <span>Add New Property</span>
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
