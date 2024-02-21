import React, { useEffect, useState } from 'react'
import TimeAgo from 'react-timeago';
import { CloseCircleTwoTone } from '@ant-design/icons';
import { Row, DatePicker, Col, List, Typography  } from 'antd';
import { useDispatch } from 'react-redux'
import StatisticBarFrag from '../fragments/statistic_bar';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { filterDate } from '../../redux/slices/dateSlice';
import { getLogId } from '../../redux/slices/logIdSlice';
import { getLogs, getTopErrorLogs } from '../../api/log.service';
import { useNavigate } from 'react-router-dom'

dayjs.extend(customParseFormat);

const HomeLayout = () => {
    const { Paragraph } = Typography
    const { RangePicker } = DatePicker    
    const [topErrorLogs, setTopErrorLogs] = useState({})
    const [recentlyLogs, setRecentlyLogs] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let requestParams = {}

    const handleClickDetail = (e, key) => {
        e.preventDefault()
        dispatch(getLogId({log_id:key}))

        navigate('/detail')
    }

    const handleChange = (values) => {

        requestParams.start_date = ""
        requestParams.end_date = ""

        if (values) {
            requestParams.start_date =  values[0].format('YYYY-MM-DD') 
            requestParams.end_date = values[1].format('YYYY-MM-DD')
        }

        dispatch(filterDate(requestParams))
    }

    useEffect(() => {
        dispatch(filterDate(requestParams))

        getLogs({"order_by" : "id", "sort_by" : "desc", "limit" : 5}, (result) => {
            setRecentlyLogs(result)
        })

        getTopErrorLogs({"limit" : 5}, (result) => {
            setTopErrorLogs(result)
        })
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Row gutter={16}>    
                <Col span={8}>
                </Col>            
                <Col span={8}>
                    <RangePicker id="date_range_statistic" name="date_range_statistic" onChange={handleChange} />                              
                </Col>
                <Col span={8}>
                </Col>       
            </Row>            
            <br />
            <Row gutter={16}>                
                <StatisticBarFrag />
            </Row>
            <br />
            <Row gutter={16}>
                <Col span={12}>
                    {recentlyLogs.data &&
                    <List
                        size="small"
                        header="Recently Error"
                        itemLayout="horizontal"
                        dataSource={recentlyLogs.data}
                        renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                            avatar={<CloseCircleTwoTone twoToneColor="red" />}
                            title={
                                <a href='#' onClick={event => handleClickDetail(event, item.id)} key={item.id}>
                                    <Paragraph ellipsis={true} style={{marginBottom : 0}}>
                                        {item.source}
                                    </Paragraph>
                                </a>}
                            description={
                                <Paragraph 
                                    ellipsis={true} 
                                    style={{
                                        marginBottom : 0, color: 'rgba(0, 0, 0, 0.45)',
                                        fontSize: '14px',
                                        lineHeight: 1.5714285714285714,
                                    }}>
                                        {item.response}
                                </Paragraph>}
                            />

                            <div>
                                <small>
                                    <i>
                                        <TimeAgo
                                            date={item.created_at}
                                            minPeriod={60}
                                        />
                                    </i>
                                </small>   
                            </div>
                        </List.Item>
                        )}
                    />
                    }
                </Col>
                <Col span={12}>                    
                    {topErrorLogs.length > 0 &&
                    <List
                        size="small"
                        header="Frequently Error"
                        itemLayout="horizontal"
                        dataSource={topErrorLogs}
                        renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                            avatar={<CloseCircleTwoTone twoToneColor="red" />}
                            title={
                                <a href="https://ant.design">
                                    <Paragraph ellipsis={true} style={{marginBottom : 0}}>
                                        {item.source}
                                    </Paragraph>
                                </a>}
                            description={
                                <Paragraph 
                                    ellipsis={true} 
                                    style={{
                                        marginBottom : 0, color: 'rgba(0, 0, 0, 0.45)',
                                        fontSize: '14px',
                                        lineHeight: 1.5714285714285714,
                                    }}>
                                        {item.response}
                                </Paragraph>}
                            />

                            <div>
                                <small>
                                    <i>
                                        <TimeAgo
                                            date={item.last_created_at}
                                            minPeriod={60}
                                        />
                                        <br />
                                        {item.log_total} error(s)
                                    </i>
                                </small>   
                            </div>
                        </List.Item>
                        )}
                    />
                    }
                </Col>
            </Row>
        </>
    )
}

export default HomeLayout