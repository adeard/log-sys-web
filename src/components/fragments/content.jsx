import React from 'react'
import { Layout, theme } from 'antd';
import BreadcrumbMenu from '../elements/breadcrumb/menu';

const { Content } = Layout;
const ContentFrag = (props) => {
    const {children, path} = props

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Content
            style={{
            padding: '0 16px',
            }}
        >
            <BreadcrumbMenu path={path} />
            <div
                className="site-layout-content"
                style={{
                padding: 24,
                minHeight: 400,
                background: colorBgContainer,
                }}
            >
                {children}
            </div>
        </Content>
    )
}

export default ContentFrag