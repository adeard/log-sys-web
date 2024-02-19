import { configureStore } from "@reduxjs/toolkit";
import dateSlice from "./slices/dateSlice";
import logIdSlice from "./slices/logIdSlice";

const store = configureStore({
    reducer : {date_statistic: dateSlice, log_id: logIdSlice}
})

store.subscribe(() => {
    console.log("STORE CHANGE : ", store.getState())
})

export default store