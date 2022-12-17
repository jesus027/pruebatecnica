import React, { useState, useRef } from 'react';
import { Tabs } from 'antd';
import { Layout } from 'antd';
import Eficiencia from './Eficiencia';
import CardsCompany from './CardsCompany';
import CardsGroups from './CardsGroups';
import CardsShops from './CardsShops';

const Cards = () => {

    //const {Sider} = Layout;

    const nextTabIndex = useRef("- ejemplo");
    
    const [tabsList, setTabsList] = useState([
        {tab:'COMPAÑIA', key:'1'}
    ]);

    const onEdit = (tabKey, action) => {
        if ( action === 'add' ){
            setTabsList(pre => [...pre,
                {
                    tab:`Compañia ${nextTabIndex.current}`,
                    key:`compania${nextTabIndex.current}`,
                },
            ]);
        } else if ( action === 'remove' ) {
            setTabsList(pre => [...pre.filter(tab=>tab.key !== tabKey)])
        }
    };

    return (
        <div>
            <Tabs defaultActiveKey='1' type='editable-card' onEdit={onEdit}>
                {tabsList.map((tabInfo, index) => {
                    return (
                        <Tabs.TabPane closable={index > 0 } tab={tabInfo.tab} key={tabInfo.key}>
                            <Layout style={{background:"#FFFF"}}>
                                <CardsCompany />
                                <CardsGroups />
                                <CardsShops />
                                <Eficiencia />
                            </Layout>
                        </Tabs.TabPane>
                    )
                })}
            </Tabs>
        </div>
    );
};

export default Cards;