import React, { useState, useEffect } from 'react'
import StatisticBar from '../elements/chart/statisticbar';
import { useSelector } from 'react-redux';
import { getLogsByDate } from '../../api/log.service';

const StatisticBarFrag = () => {
    const [statisticErrorDate, setStatisticErrorDate] = useState({})
    const dateStatistic = useSelector((state) => state.date_statistic)

    let date = []
    let totalError = []

    useEffect(() => {
      getLogsByDate(dateStatistic, (result) => {
        setStatisticErrorDate(result)
      })
        // eslint-disable-next-line
    }, [dateStatistic])

    if (!statisticErrorDate) {
      return
    }

    if (statisticErrorDate.hasOwnProperty("length")) {        
      statisticErrorDate.forEach(element => {
          date.push(element.log_date);
          totalError.push(element.log_total)
      });
    }

    const state = {
        labels: date,
        datasets: [
          {
            label: 'Error',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
            data: totalError
          }
        ]
    }

    return (
        <StatisticBar state = {state} />  
    )
}

export default StatisticBarFrag