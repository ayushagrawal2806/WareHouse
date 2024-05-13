import { createSlice } from "@reduxjs/toolkit";
import data from "../../Data.json"; // Update the import path accordingly

export const warehouseDataSlice = createSlice({
  name: "warehouseDataSlice",
  initialState: { data: data, data2: data },
  reducers: {
    handelWarehouseData: (state, action) => {
      console.log(action.payload);
      let x = action.payload;
      state.data = x;
      state.data2 = x;
    },
    handelFilterWarehouseData: (state, action) => {
      state.data2 = action.payload;
      console.log(state.data2);
    },
  },
});

export const { handelWarehouseData, handelFilterWarehouseData } =
  warehouseDataSlice.actions;

export default warehouseDataSlice.reducer;
