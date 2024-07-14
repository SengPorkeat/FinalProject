import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  // state
  news: [],
  history: [],
  status: "idle",
  error: null,
};

const baseUrl = import.meta.env.VITE_BASE_URL;
const endPoint = import.meta.env.VITE_NEW_URL;
const apiUrl = `${baseUrl}${endPoint}`;

// fetch all contents
export const fetchContents = createAsyncThunk(
  "contents/fetchContents",
  async () => {
    const response = await fetch(`${apiUrl}`);
    const contentData = await response.json();
    // console.log("Content Data: ", contentData.data);
    return contentData.data;
  }
);


export const contentSlice = createSlice({
  name: "contents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContents.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchContents.fulfilled, (state, action) => {
        state.status = "Success";
        // Separate contents based on content_type
        state.news = action.payload.filter(
          (item) => item.content_type === "news"
        );
        state.history = action.payload.filter(
          (item) => item.content_type === "history"
        );
      })
      .addCase(fetchContents.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
});

// export reducer
export default contentSlice.reducer;

// export selectors and "content" is the name of the reducer and news, history
export const selectAllNews = (state) => state?.content?.news;
export const selectAllHistory = (state) => state?.content?.history;
