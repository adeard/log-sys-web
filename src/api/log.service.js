import axios from "axios";
import Api from ".";

export const getLogsByDate = (data, callback) => {
    axios.get(`${Api}/api/v1/log/range?start_date=${data.start_date}&end_date=${data.end_date}`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(res.data.data)
    }).catch((err) => {
        console.log(err)
    })
}