import React from 'react'
import { HomeOutlined} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
const { Sider } = Layout;

const menu_list = [
    {
        label: <Link to='/'>Home</Link>,
        key: 'home',
        icon: <HomeOutlined />,
    },
]

const SidebarFrag = (props) => {    
    const {collapsed, current_page} = props;
    return (
        <Sider trigger={null} collapsible collapsed={collapsed} style={{backgroundColor:"#3F5E5A"}}>
            <div className="demo-logo-vertical" />
            <h4>Log System</h4>            
            <Menu
            style={{
                color:"white",
                backgroundColor:"#38423B"
            }}
            mode="inline"
            selectedKeys={[current_page]} 
            items={menu_list}
            />
        </Sider>
    )
}

export default SidebarFrag