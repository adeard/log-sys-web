import React, { useEffect, useState } from 'react'
import { Table, Col, Pagination  } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { getLogs } from '../../api/log.service';
import { getLogId, updateRepeatedLogList } from '../../redux/slices/logIdSlice';

const DetailRepeatedLogFrag = () => {
    const dispatch = useDispatch()
    const [totalData, setTotalData] = useState(0)
    const [repeatedLogData, setRepeatedLogData] = useState([])
    const source = useSelector((state) => state.log_id.source)
    const titleCardStyle = {
        marginBottom:"14px",
        color:"rgba(0, 0, 0, 0.45)",
        fontSize:"14px",
    };

    const columns = [
        { title: 'Log ID', align:'center', dataIndex: 'log_id',key: 'log_id', },
        { title: 'Request', align:'center', dataIndex: 'request', key: 'request', ellipsis: true, },
        { title: 'Response', align:'center', dataIndex: 'response', key: 'response', ellipsis: true, },
        { title: 'Status Code', align:'center', dataIndex: 'status_code', key: 'status_code', },
        { title: 'Log Date', align:'center', dataIndex: 'log_date', key: 'log_date', },
    ];

    const dataset = repeatedLogData.map((obj, index) =>  {
        let datas = {
            "log_id" : <a href='#' onClick={event => handleClickDetail(event, obj.id)} key={obj.id}>{obj.id}</a>,
            "key" : index + 1,
            "request" : obj.request,
            "response" : obj.response, 
            "log_date" : obj.created_at,
            "status_code": obj.status_code
        }

        return datas
    });

    const updateRepeatedLogs = (input) => {
        getLogs({"source": input.source, "order_by" : "id", "sort_by" : "desc", "page" : input.page}, (result) => {
            setRepeatedLogData(result.data)
            setTotalData(result.total_data)
        })  
    }

    const handlePageNumber = (page) => {
        
        let filterData = {
            "source": source,
            "page" : page
        }

        updateRepeatedLogs(filterData)
    }

    const handleClickDetail = (e, key) => {
        e.preventDefault()

        dispatch(getLogId({log_id:key}))
        dispatch(updateRepeatedLogList({is_update : 1}))

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
    }

    useEffect(() => {
        updateRepeatedLogs({"source" : source})
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Col span={24}>  
                    <p style={titleCardStyle}>
                    Repeated Logs
                </p>                  
                <Table columns={columns} dataSource={dataset} size='small' pagination={false} />                    
            </Col>
            <Col offset={14} span={10}>
                <br />
                <Pagination 
                    size='small'
                    total={totalData} 
                    showSizeChanger={false} 
                    showTotal={(total) => `Total ${total} items`} 
                    onChange={handlePageNumber}
                />
            </Col>
        </>
    )
}

export default DetailRepeatedLogFrag