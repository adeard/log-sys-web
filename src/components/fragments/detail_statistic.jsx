import React from 'react'
import { Row, Col, Statistic  } from 'antd';
import { InsertRowAboveOutlined } from '@ant-design/icons'

const DetailStatisticFrag = (props) => {
    const {source, logId, createDate} = props

    return (
        <>
            <Row gutter={16}>             
                <Col span={24}>                    
                    <Statistic title="Source" value={source} />                    
                </Col>
            </Row>
            <br />
            <Row gutter={16}>             
                <Col span={4}>                    
                    <Statistic prefix="#" title="Log ID" value={logId} />                    
                </Col>
                <Col span={8}>
                    <Statistic prefix={<InsertRowAboveOutlined />} title="Log Date" value={createDate} />
                </Col>
            </Row>
        </>
    )
}

export default DetailStatisticFrag