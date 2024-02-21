import axios from "axios";
import Api from ".";

export const getLogsByDate = (data, callback) => {
    axios.get(`${Api}/api/v1/log/range?start_date=${data.start_date ?? ""}&end_date=${data.end_date ?? ""}&limit=${data.limit ?? ""}`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(res.data.data)
    }).catch((err) => {
        console.log(err)
    })
}

export const getLogs = (data, callback) => {
    axios.get(`${Api}/api/v1/log?`+
        `order_by=${data.order_by ?? ""}`+
        `&sort_by=${data.sort_by ?? ""}`+
        `&limit=${data.limit ?? ""}`+
        `&source=${data.source ?? ""}`+
        `&page=${data.page ?? 1}`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(res.data.data)
    }).catch((err) => {
        console.log(err)
    })
}

export const getTopErrorLogs = (data, callback) => {
    axios.get(`${Api}/api/v1/log/top?limit=${data.limit ?? ""}`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(res.data.data)
    }).catch((err) => {
        console.log(err)
    })
}

export const getDetailLogs = (id, callback) => {
    axios.get(`${Api}/api/v1/log/${id}`,
    { headers: { Authorization: "Bearer " + localStorage.getItem('token') } }).then((res) => {
        callback(res.data.data)
    }).catch((err) => {
        console.log(err)
    })
}