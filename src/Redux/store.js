import { configureStore } from "@reduxjs/toolkit";
import warehouseDataSlice from "./slice/AllWarehouseData";
export const store = configureStore({
  reducer: {
    warehouseData: warehouseDataSlice,
  },
});
