import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../../i18n";

const languageSlice = createSlice({
  name: "language",
  initialState: "vi",
  reducers: {
    setLanguage: (state, action) => action.payload,
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
