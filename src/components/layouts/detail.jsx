import React, { useEffect, useState } from 'react'
import { Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { getDetailLogs } from '../../api/log.service';
import DetailJsonFrag from '../fragments/detail_json';
import DetailStatisticFrag from '../fragments/detail_statistic';
import { getLogId, updateRepeatedLogList } from '../../redux/slices/logIdSlice';
import DetailRepeatedLogFrag from '../fragments/detail_repeated_log';

const DetailLayout = () => {
    const [logData, setLogData] = useState({})
    const logId = useSelector((state) => state.log_id.log_id)
    const updateList = useSelector((state) => state.log_id.is_update)
    const dispatch = useDispatch()


    useEffect(() => {  
        if (updateList === 1) {
            console.log(logId)
            getDetailLogs(logId, (result) => {
                setLogData(result)
    
                dispatch(getLogId({log_id:result.id, source:result.source}))
                dispatch(updateRepeatedLogList({is_update : 0}))
            })
        }    
        // eslint-disable-next-line
    }, [updateList])

    useEffect(() => {        
        getDetailLogs(logId, (result) => {
            setLogData(result)

            dispatch(getLogId({log_id:result.id, source:result.source}))
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
            <Row gutter={16}>  
                <DetailRepeatedLogFrag />
            </Row>
        </>
    )
}

export default DetailLayout