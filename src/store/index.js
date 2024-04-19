import { configureStore } from "@reduxjs/toolkit";
import {RoomFormsReducer} from "../modules/RoomSelector";

const mainStore = configureStore({
  reducer: {
    roomForms: RoomFormsReducer,
  },
})

export { mainStore }