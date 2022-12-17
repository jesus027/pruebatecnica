import React from 'react';
import Account from '../db/Account.json';
import { Card, Layout, Space, Col, Row, Typography, Tooltip, Dropdown, Menu } from 'antd';
import { BarChartOutlined, SlidersOutlined } from "@ant-design/icons";
import { BsLightbulb } from 'react-icons/bs';
import { MdOutlineReceiptLong, MdBatteryChargingFull } from 'react-icons/md';

const Eficiencia = () => {

    const {Sider} = Layout;

    return (
        <div>
            <Sider style={{
                background:"#FFFF",
                borderRight: "1px solid #3C5391",
                overflow: 'auto',
                height: '100vh',
            }}>
                <Space direction="vertical" size="middle" style={{ display: 'flex', justifyContent:'space-around' }}>
                    {
                        Account.data.map((accounts, index) => (
                            <Card key={index} size="small">
                                <Row>
                                    <Col span={24} style={{ marginBottom: "9px" }}>
                                        <Typography.Text style={{ color: "#5C5C61", fontWeight: "bold" }}>
                                            {accounts.name.toUpperCase()}
                                        </Typography.Text>
                                    </Col>
                                    
                                    {accounts.base.map((m) => (
                                            <>
                                            {accounts.percent !== undefined ? (
                                                <>
                                                <Typography.Text
                                                    style={{ fontSize: "0.7rem", textAlign: "center" }}
                                                >
                                                    {m.percent}
                                                </Typography.Text>
                                                </>
                                            ) : (
                                                <Tooltip title={m.name} color="#D088B9">
                                                <Col
                                                    span={6}
                                                    style={{
                                                    display: "grid",
                                                    justifyContent: "center",
                                                    marginBottom: "9px",
                                                    }}
                                                >
                                                    {m.name === "Current Conmsuption" ? (
                                                    <BsLightbulb
                                                        style={{
                                                        color: "#009432  ",
                                                        fontSize: "22px",
                                                        fontWeight: "600",
                                                        }}
                                                    />
                                                    ) : m.name === "Potential" ? (
                                                    <MdBatteryChargingFull
                                                        className="material-icons"
                                                        style={{
                                                        color: "#009432  ",
                                                        fontSize: "22px",
                                                        fontWeight: "500",
                                                        }}
                                                    >
                                                        
                                                    </MdBatteryChargingFull>
                                                    ) : m.name === "Base Conmsuption" ? (
                                                    <SlidersOutlined
                                                        style={{
                                                        color: "#009432  ",
                                                        fontSize: "22px",
                                                        fontWeight: "600",
                                                        }}
                                                    />
                                                    ) : (
                                                    <BarChartOutlined
                                                        style={{
                                                        color: "#009432",
                                                        fontSize: "22px",
                                                        fontWeight: "600",
                                                        }}
                                                    />
                                                    )}

                                                    <Typography.Text
                                                    style={{ fontSize: "0.7rem", textAlign: "center" }}
                                                    >
                                                    {m.percent}
                                                    </Typography.Text>
                                                </Col>
                                                </Tooltip>
                                            )}
                                            </>
                                        ))}
                                </Row>
                            </Card>

                        ))
                        
                    }
                </Space>
            </Sider>
        </div>
    );
};

export default Eficiencia;