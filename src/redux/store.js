import { configureStore } from "@reduxjs/toolkit";
import sportclubReducer from "../redux/feature/sportclub/SportClubSlice"; // Adjust the import path as necessary
import contentSlice from "./feature/content/contentSlice";

const store = configureStore({
  reducer: {
    sportclubs: sportclubReducer,
    content: contentSlice,
  },
});

export default store;
