import React from 'react';
import './index.css';
import { Layout, theme, Col, Typography, Row } from 'antd';
import TableBooking from "../DashBoard/TableBooking"
import SideBar from "../DashBoard/SideBar"
import HeaderBar from "../DashBoard/HeaderBar"
import SearchInput from "../DashBoard/SearchInput"
const { Content, Sider } = Layout;
const { Title } = Typography;

const DashBoard: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{ width: '1300px' }}>
            <Layout>
                <SideBar />
                <Layout style={{ padding: '0 24px 24px' }}>
                    <HeaderBar />
                    <Col style={{ display: 'flex', textAlign: 'center', alignItems: 'center' }}>
                        <Title>DashBoard
                            <SearchInput />
                        </Title>
                    </Col>
                    <Row>
                        <Col span={12} style={{ height: '200px', background: 'orange', borderRadius: '40px' }}>
                            <Title>Doanh thu ngày</Title>
                        </Col>
                        <Col span={12}>
                            <Title>Tổng quan</Title>
                        </Col>
                    </Row>
                    <Col>
                        <Title style={{ marginRight: '835px' }}>Booking List</Title>
                    </Col>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <TableBooking />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default DashBoard;