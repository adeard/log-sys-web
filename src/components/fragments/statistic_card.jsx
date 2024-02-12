import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { 
    DatabaseFilled, 
    SoundFilled, 
    RocketFilled, 
    HomeFilled, 
    CheckCircleFilled 
} from '@ant-design/icons';
import { Col } from 'antd';
import TaskCard from '../elements/card/task';

const StatisticCardFrag = () => {

    const [startedTotal, setStartedTotal] = useState(0)
    const [arrivedTotal, setArrivedTotal] = useState(0)
    const [assignedTotal, setAssignedTotal] = useState(0)
    const [completedTotal, setCompletedTotal] = useState(0)    
    const [notifyDriverTotal, setNotifyDriverTotal] = useState(0)
    const dateStatistic = useSelector((state) => state.date_statistic)

    useEffect(() => {
        if (!dateStatistic.vendor_id) {
            return
        }

        setAssignedTotal(0)
        setNotifyDriverTotal(0)
        setStartedTotal(0)
        setArrivedTotal(0)
        setCompletedTotal(0)

        
    }, [dateStatistic])

    const cardList = [        
        {
            style: { backgroundColor:"#9ee493" },
            title: "Assigned",
            value: assignedTotal,
            prefix: <DatabaseFilled />
        },
        {
            style: { backgroundColor:"#FFC8DD" },
            title: "Notify Driver",
            value: notifyDriverTotal,
            prefix: <SoundFilled />
        },
        {
            style: { backgroundColor:"#e5b3fe" },
            title: "Started",
            value: startedTotal,
            prefix: <RocketFilled />
        },
        {
            style: { backgroundColor:"#BDE0FE" },
            title: "Arrived",
            value: arrivedTotal,
            prefix: <HomeFilled />
        },
        {
            style: { backgroundColor:"#6fffe9" },
            title: "Completed",
            value: completedTotal,
            prefix: <CheckCircleFilled />
        },
    ]

    return (
        <>
            <Col span={2}></Col>
            {cardList.map((task) => (                                
                <Col span={4} key={task.title}>
                    <TaskCard 
                        style={task.style} 
                        title={task.title}
                        value={task.value}
                        prefix={task.prefix}
                    />
                </Col>
            ))}    
            <Col span={2}></Col>
        </>   
    )
}

export default StatisticCardFrag