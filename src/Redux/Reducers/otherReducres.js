import {createReducer} from "@reduxjs/toolkit";


export const otherReducer = createReducer({},{

    contactRequest:(state)=>{
        state.loading = true;
    },
    contactSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    contactFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },

    
    courseReqRequest:(state)=>{
        state.loading = true;
    },
    courseReqSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    courseReqFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },

    clearError:(state)=>{
        state.error = null;
    },
    
    clearMessage:(state)=>{
        state.message = null;
    }
});