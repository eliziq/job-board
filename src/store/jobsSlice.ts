import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IJob } from "../interfaces";
import { RootState } from "./store";
import { transformJob } from "../util/helpers";

export const selectJobsList = (state: RootState) => state.jobs.jobList;
export const selectSelectedJob = (state: RootState) => state.jobs.selectedJob;

export const fetchAsyncJobList = createAsyncThunk(
  "jobs/fetchAsyncJobList",
  async () => {
    let response: IJob[] = await axios
      // .get(`https://mocki.io/v1/9ca6333f-33d9-424c-85c4-c2ab131e6656`)
      .get(
        `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=${process.env.REACT_APP_API_KEY}`
      )
      .then(({ data }) => data.map((j: IJob) => transformJob(j)));

    return response;
  }
);

export interface JobsState {
  jobList: IJob[];
  savedJobs: string[];
  selectedJob: IJob | null;
}

const initialState: JobsState = {
  jobList: [],
  savedJobs: [],
  selectedJob: null,
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobList: (state, action: PayloadAction<IJob[]>) => {
      state.jobList = action.payload;
    },
    setSelectedJob: (state, action: PayloadAction<string | undefined>) => {
      const jobList = state.jobList;
      state.selectedJob = jobList.filter((job) => {
        return job.id === action.payload;
      })[0];
    },
    saveJob: (state, action) => {
      state.savedJobs.push(action.payload.id);
    },
    removeFromSaved: (state, action) => {
      state.savedJobs.splice(state.savedJobs.indexOf(action.payload.id), 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchAsyncJobList.fulfilled,
      (state, action: PayloadAction<IJob[]>) => {
        state.jobList = action.payload;
      }
    );
  },
});

export const { setJobList, setSelectedJob, saveJob, removeFromSaved } =
  jobsSlice.actions;

export default jobsSlice.reducer;
