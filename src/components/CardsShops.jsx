import React from 'react';
import Shops from '../db/Shops.json';
import { Card, Layout, Space, Col, Row, Typography, Tooltip, Dropdown, Menu } from 'antd';
import { BarChartOutlined, SlidersOutlined } from "@ant-design/icons";
import { BsLightbulb } from 'react-icons/bs';
import { MdOutlineReceiptLong, MdBatteryChargingFull } from 'react-icons/md';

const CardsShops = () => {

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
                        Shops.data.map((shops, index) => (
                            <Card key={index} size="small">
                                <Row>
                                    <Dropdown overlay={"ejemplo"} trigger={['contextMenu']}>
                                                
                                        <Col span={24} style={{ marginBottom: "9px" }}>
                                            <Typography.Text style={{ color: "#5C5C61", fontWeight: "bold" }}>
                                                {shops.name.toUpperCase()}
                                            </Typography.Text>
                                        </Col>

                                    </Dropdown>
                                    {shops.base.map((m) => (
                                            <>
                                            {shops.percent !== undefined ? (
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

                                        {shops.accounts !== undefined ? (
                                            <Tooltip title="accounts" color="#009432">
                                            <Col
                                                span={
                                                shops.accounts !== undefined
                                                    ? 8
                                                    : shops.shops === undefined
                                                    ? 24
                                                    : 12
                                                }
                                                style={{ display: "grid", textAlign: "center" }}
                                            >
                                                <Typography.Text>
                                                <MdOutlineReceiptLong className="material-icons" style={{ color: "#009432", fontSize:'1.8rem' }}>
                                                    receipt_long
                                                </MdOutlineReceiptLong>
                                                </Typography.Text>

                                                <Typography.Text
                                                style={{ fontSize: "0.7rem", textAlign: "center" }}
                                                >
                                                {shops.accounts}
                                                </Typography.Text>
                                            </Col>
                                            </Tooltip>
                                        ) : null}
                                </Row>
                            </Card>

                        ))
                        
                    }
                </Space>
            </Sider>
        </div>
    );
};

export default CardsShops;