import React, { useState } from 'react';
import { Card, Layout, Space, Col, Row, Typography, Progress, Tooltip, Dropdown, Menu } from 'antd';
import Company from '../db/Company.json';
import { BarChartOutlined, SlidersOutlined, ShopOutlined } from "@ant-design/icons";
import { BsShopWindow } from 'react-icons/bs';
import { MdOutlineReceiptLong, MdGroups } from 'react-icons/md';

function CardsCompany() {

    const {Sider} = Layout;

    const menu = (
        <Menu
            items={[
                {
                    label:"Groupos",
                    key: "groups",
                    icon: <MdGroups style={{fontSize:'1rem'}} />
                },
                {
                    label:"Tiendas",
                    key: "shops",
                    icon: <BsShopWindow style={{fontSize:'1rem'}} />
                },
                {
                    label:"Cuentas",
                    key: "accounts",
                    icon: <MdOutlineReceiptLong style={{fontSize:'1rem'}} />
                },
            ]}
        ></Menu>
    );

    return (
        <div>
            <Sider style={{
                background:"#FFFF",
                borderRight: "1px solid #3C5391",
                overflow: 'auto',
                height: '100vh',
            }}>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    
                    {
                        Company.data.map( (companys, index) =>(
                                <Card key={index} size="small">
                                    <Row>
                                        {companys.accounts !== undefined ? (
                                            <Col span={24} style={{ marginBottom: "3px" }}>
                                            <Typography.Text
                                                style={{ color: "#5C5C61", fontWeight: "bold", fontSize: "14px" }}
                                            >
                                                
                                            </Typography.Text>
                                            </Col>
                                        ) : null}
                                        <Dropdown overlay={menu} trigger={['contextMenu']}>
                                                
                                            <Col span={24} style={{ marginBottom: "9px" }}>
                                                <Typography.Text style={{ color: "#5C5C61", fontWeight: "bold" }}>
                                                {companys.name.toUpperCase()}
                                                </Typography.Text>
                                            </Col>

                                        </Dropdown>

                                        {companys.base.map((m) => (
                                            <>
                                            {companys.groups !== undefined ? (
                                                <>
                                                <Typography.Text
                                                    style={{ fontSize: "0.7rem", textAlign: "center" }}
                                                >
                                                    {m.name}
                                                </Typography.Text>
                                                <Progress
                                                    percent={m.percent}
                                                    status="active"
                                                    strokeColor={{
                                                    from: "#108ee9",
                                                    to: "#87d068",
                                                    }}
                                                    style={{ marginBottom: "9px" }}
                                                />
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
                                                    <ShopOutlined
                                                        style={{
                                                        color: "#009432  ",
                                                        fontSize: "22px",
                                                        fontWeight: "600",
                                                        }}
                                                    />
                                                    ) : m.name === "Potential" ? (
                                                    <span
                                                        className="material-icons"
                                                        style={{
                                                        color: "#009432  ",
                                                        fontSize: "22px",
                                                        fontWeight: "500",
                                                        }}
                                                    >
                                                        battery_charging_full
                                                    </span>
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

                                        {companys.groups !== undefined ? (
                                            <Tooltip title="groups" color="#009432">
                                            <Col
                                                span={companys.groups !== undefined ? 8 : 12}
                                                style={{ display: "grid", justifyContent: "center" }}
                                            >
                                                <Typography.Text>
                                                <MdGroups  style={{ color: "#009432", fontSize:"1.8rem" }}>
                                                    groups
                                                </MdGroups>
                                                </Typography.Text>

                                                <Typography.Text
                                                style={{
                                                    fontSize: "0.7rem",
                                                    textAlign: "center",
                                                }}
                                                >
                                                {companys.groups}
                                                </Typography.Text>
                                            </Col>
                                            </Tooltip>
                                        ) : null}

                                        {companys.shops !== undefined ? (
                                            <Tooltip title="shops" color="#009432">
                                            <Col
                                                span={companys.groups !== undefined ? 8 : 12}
                                                style={{ display: "grid", justifyContent: "center" }}
                                            >
                                                <Typography.Text>
                                                <BsShopWindow  style={{ color: "#009432", fontSize:"1.8rem" }}>
                                                    shops
                                                </BsShopWindow>
                                                </Typography.Text>

                                                <Typography.Text
                                                style={{ fontSize: "0.7rem", textAlign: "center" }}
                                                >
                                                {companys.shops}
                                                </Typography.Text>
                                            </Col>
                                            </Tooltip>
                                        ) : null}

                                        {companys.accounts !== undefined ? (
                                            <Tooltip title="accounts" color="#009432">
                                            <Col
                                                span={
                                                companys.groups !== undefined
                                                    ? 8
                                                    : companys.shops === undefined
                                                    ? 24
                                                    : 12
                                                }
                                                style={{ display: "grid", justifyContent: "center" }}
                                            >
                                                <Typography.Text>
                                                <MdOutlineReceiptLong className="material-icons" style={{ color: "#009432", fontSize:'1.8rem' }}>
                                                    receipt_long
                                                </MdOutlineReceiptLong>
                                                </Typography.Text>

                                                <Typography.Text
                                                style={{ fontSize: "0.7rem", textAlign: "center" }}
                                                >
                                                {companys.accounts}
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

export default CardsCompany;