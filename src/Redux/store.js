import { configureStore } from "@reduxjs/toolkit";
import {profileReducer, subscriptionReducer, userReducer} from "./Reducers/userReducer";
import { courseReducer } from "./Reducers/courseReducer";
import { adminReducer } from "./Reducers/adminReducer";
import { otherReducer } from "./Reducers/otherReducres";

const store = configureStore({

    reducer:{
       user: userReducer,
       profile: profileReducer,
       course: courseReducer,
       subscription: subscriptionReducer,
       admin: adminReducer,
       other: otherReducer,
    },
});

export default store;

export const server = "https://b-smart.onrender.com/api/v1";