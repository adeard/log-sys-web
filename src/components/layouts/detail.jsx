import React, { useEffect, useState } from 'react'
import { Row  } from 'antd';
import { useSelector } from 'react-redux'
import { getDetailLogs } from '../../api/log.service';
import DetailJsonFrag from '../fragments/detail_json';
import DetailStatisticFrag from '../fragments/detail_statistic';

const DetailLayout = () => {
    const [logData, setLogData] = useState({})
    const logId = useSelector((state) => state.log_id.log_id)

    useEffect(() => {
        getDetailLogs(logId, (result) => {
            setLogData(result)
        })

        // eslint-disable-next-line
    }, [])

    return (
        <>
            <DetailStatisticFrag source={logData.source} logId={logData.id} createDate={logData.created_at} />           
            <br />
            <Row gutter={16}>  
                <DetailJsonFrag title="Request" data={logData.request} />
                <DetailJsonFrag title="Response" data={logData.response} />
            </Row>
        </>
    )
}

export default DetailLayout