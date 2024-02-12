import React,{ useState } from 'react'
import { Layout } from 'antd';
import ContentFrag from '../fragments/content';
import SidebarFrag from '../fragments/sidebar';
import HeaderFrag from '../fragments/header';
import Foot from '../elements/footer/Foot';

const { Footer } = Layout;
const ContentLayout = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const {children, current_page} = props
    
    const handleCollapseTrigger = (dataFromChild) => {
        setCollapsed(dataFromChild);
    };

    return (
        <Layout hasSider={true} style={{ minHeight: '100vh' }}>
            <SidebarFrag collapsed = {collapsed}></SidebarFrag>
            <Layout>
                <HeaderFrag current_page={current_page} collapseTrigger ={handleCollapseTrigger}></HeaderFrag>                
                <ContentFrag path={current_page}>{children}</ContentFrag>
                <Foot/>
            </Layout>
        </Layout>
    )
}

export default ContentLayout