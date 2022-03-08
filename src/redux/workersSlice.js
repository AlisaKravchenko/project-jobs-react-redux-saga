import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    workers: [],
    visibleJobs: []
}

const workersSlice = createSlice({
    name: 'workers',
    initialState,
    reducers: {
        setWorkers(state, action){
            state.workers = action.payload
        },
        asyncSetWorkers(){},
        selectJob(state, action){
            console.log(current(state));
            state.visibleJobs = state.workers.filter(el => el.job === action.payload)
          }
    }
})

export default workersSlice.reducer
export const {setWorkers, asyncSetWorkers, selectJob} = workersSlice.actions

