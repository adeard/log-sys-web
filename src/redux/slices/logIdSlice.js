import { createSlice } from "@reduxjs/toolkit";

const logIdSlice = createSlice({
    name:"log_id",
    initialState: {},
    reducers: {
        getLogId: (state, action) => {
            state.log_id = action.payload.log_id ?? ""
            state.source = action.payload.source ?? ""
        },
        updateRepeatedLogList : (state, action) => {
            state.is_update = action.payload.is_update ?? 0
        }
    }
})

export const {getLogId, updateRepeatedLogList} = logIdSlice.actions
export default logIdSlice.reducer