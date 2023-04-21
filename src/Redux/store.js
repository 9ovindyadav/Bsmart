import { configureStore } from "@reduxjs/toolkit";
import {profileReducer, userReducer} from "./Reducers/userReducer";
import { courseReducer } from "./Reducers/courseReducer";

const store = configureStore({

    reducer:{
       user: userReducer,
       profile: profileReducer,
       course: courseReducer,
    },
});

export default store;

export const server = "https://b-smart.onrender.com/api/v1";