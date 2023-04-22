import { Box, Container, Heading, VStack,Text, Button } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { server } from '../../Redux/store';
import { buySubscription } from '../../Redux/Actions/user';
import toast from "react-hot-toast";


const Subscribe = ({user}) => {

const dispatch = useDispatch();

const [key,setKey] = useState();

const {subscriptionId,loading,error} = useSelector(state=>state.subscription);
const { error: courseError} = useSelector(state=>state.course);

const subscribeHandler = ()=>{
 
  const data = axios.get(`${server}/razorpaykey`);

  setKey(data.key);
  dispatch(buySubscription());
};

useEffect(()=>{
  if(error){
    toast.error(error);
    dispatch({type:"clearError"});
  };
  if(courseError){
    toast.error(courseError);
    dispatch({type:"clearError"});
  };
  if(subscriptionId){
    const openPopUp = ()=>{
       const options = {
               key,
               name:"Gsmart",
               description:"Get access to all premium content",
               image: "",
               subscription_id: subscriptionId,
               callback_url:`${server}/paymentverification`,
               prefill:{
                name: user.name,
                email: user.email,
                constact: "",
               },
               notes:{
                address: ""
               },
               theme:{
                color: "#ffc800"
               },

       };
       const razor = new window.Razorpay(options);
       razor.open();
    };
    openPopUp();
  }
},[dispatch,error,user.name,user.email,key,subscriptionId])

  return (
    <Container centerContent h={"100vh"}>
        
        <Heading size={"xl"} children="Welcome" textAlign={"center"} my={"8"}/>
        <Box px={"20"} w={"full"}>
        <VStack
                boxShadow={"lg"} 
                alignItems={"stretch"} 
                borderRadius={"lg"}
                spacing={"0"}
                > 
            <Box p={"3"} bg={"yellow.400"} css={{borderRadius:"8px 8px 0 0"}}>
            <Text fontSize={"xl"} textAlign={"center"} children="Pro pack -  ₹299"/>
            </Box>
            <Box p={"4"}>
               <VStack textAlign={"center"} spacing={"8"} px={"4"} mt={"8"}>
                  <Text children="Buy now and get access to all the contents"/>
                  <Heading size={"md"} children="₹299 Only"/>
               </VStack>
               <Button isLoading={loading} my={"8"} w={"full"} onClick={subscribeHandler} colorScheme='yellow'>Buy now</Button>
            </Box>
            <Box p={"3"} bg={"blackAlpha.400"} css={{borderRadius:"0 0 8px 8px"}}>
            <Text fontSize={"md"} children="100% Refund after Cancelation"/>
            <Text fontSize={"xs"} color={"white"} children="Terms & Conditions Apply"/>
            </Box>
        </VStack>
        </Box>
    </Container>
  )
}

export default Subscribe;