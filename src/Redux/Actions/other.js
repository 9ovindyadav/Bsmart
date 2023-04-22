import { server } from "../store";
import axios from "axios";

export const contactUs = (name, email, message)=> async(dispatch)=>{

    try {
        dispatch({type:"contactRequest"});

        const {data} = await axios.post(`${server}/contact`,{name, email, message},{
            headers:{
                "Content-Type":"application/json",
            },withCredentials: true,
        });

        dispatch({ type: "contactSuccess", payload: data.message });
    } catch (error) {
        dispatch({ type: "contactFail", payload: error.response.data.message});
    }
};


export const requestCourse = (name, email, course)=> async(dispatch)=>{

    try {
        dispatch({type:"courseReqRequest"});

        const {data} = await axios.post(`${server}/requestcourse`,{name, email, course},{
            headers:{
                "Content-Type":"application/json",
            },withCredentials: true,
        });

        dispatch({ type: "courseReqSuccess", payload: data.message });
    } catch (error) {
        dispatch({ type: "courseReqFail", payload: error.response.data.message});
    }
};

