import React from 'react'
import JSONPretty from 'react-json-pretty';
import { Col  } from 'antd';

const DetailJsonFrag = (props) => {
    const {title, data} = props

    const containerStyle = {
        width: '100%',
        height: 300,
        overflow: 'auto',
    };

    const titleCardStyle = {
        marginBottom:"14px",
        color:"rgba(0, 0, 0, 0.45)",
        fontSize:"14px",
    };

    return (
        <Col span={12}>
            <p style={titleCardStyle}>{title}</p>
            <div style={containerStyle}>
                <JSONPretty id="json-pretty" data={data} />
            </div>
        </Col>
    )
}

export default DetailJsonFrag