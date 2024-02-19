import React, { useEffect, useState } from 'react'
import TimeAgo from 'react-timeago';
import JSONPretty from 'react-json-pretty';
import { Row, Typography, Form, Input, Col } from 'antd';
import { useSelector } from 'react-redux'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
// import 'react-json-pretty/themes/monikai.css';
import { getDetailLogs } from '../../api/log.service';

dayjs.extend(customParseFormat);

const DetailLayout = () => {
    const { TextArea } = Input;
    const { Paragraph } = Typography;
    const [form] = Form.useForm();    
    const [logData, setLogData] = useState({})
    const logId = useSelector((state) => state.log_id.log_id)

    useEffect(() => {
        getDetailLogs(logId, (result) => {
            setLogData(result)
            console.log(result)
        })
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Row gutter={16}> 
                <Col span={24}>
                    <h4>Detail</h4>    
                    <Form 
                        layout="horizontal" 
                        form={form}
                        size={"small"}>
                        <Form.Item label="Log ID">
                            {logData.id}
                        </Form.Item>
                        <Form.Item label="Source">
                            {logData.source}
                        </Form.Item>
                        <Form.Item label="Status Code">
                            {logData.status_code}
                        </Form.Item>
                    </Form>
                </Col>
                
                
            </Row>
            <Row gutter={16}>  
                <Col span={12}>
                    <h4>Request</h4>
                    <JSONPretty id="json-pretty" data={logData.request}></JSONPretty>
                </Col>
                <Col span={12}>
                    <h4>Response</h4>
                    <p>
                    {logData.response}
                    </p>
                </Col>      
            </Row>
            <br />
            
        </>
    )
}

export default DetailLayout