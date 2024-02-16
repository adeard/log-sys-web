import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
    name:"date",
    initialState: {},
    reducers: {
        filterDate: (state, action) => {
            state.start_date = action.payload.start_date ?? ""
            state.end_date = action.payload.end_date ?? ""
            state.limit = action.payload.limit ?? ""
        }
    }
})

export const {filterDate} = dateSlice.actions
export default dateSlice.reducer