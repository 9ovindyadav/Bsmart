import { createReducer } from "@reduxjs/toolkit";

export const courseReducer = createReducer({courses:[],lectures:[]},{

         allCourseRequest:(state)=>{
            state.loading = true;
         },
         allCourseSuccess:(state,action)=>{
            state.loading = false;
            state.courses = action.payload;
         },
         allCourseFail:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
         },

         getLecturesRequest:(state)=>{
            state.loading = true;
         },
         getLecturesSuccess:(state,action)=>{
            state.loading = false;
            state.lectures = action.payload;
         },
         getLecturesFail:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
         },

         addtoPlaylistRequest:(state)=>{
            state.loading = true;
         },
         addtoPlaylistSuccess:(state,action)=>{
            state.loading = false;
            state.message = action.payload ;
         },
         addtoPlaylistFail:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
         },
         clearError:(state)=>{
            state.error = null;
        },
        clearMessage:(state)=>{
         state.message = null;
     },
});