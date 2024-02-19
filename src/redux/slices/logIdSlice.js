import { createSlice } from "@reduxjs/toolkit";

const logIdSlice = createSlice({
    name:"log_id",
    initialState: {},
    reducers: {
        getLogId: (state, action) => {
            state.log_id = action.payload.log_id ?? ""
        }
    }
})

export const {getLogId} = logIdSlice.actions
export default logIdSlice.reducer