import { Button, Container, HStack, Heading, Input, VStack,Text, Textarea } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {requestCourse} from "../../Redux/Actions/other";
import { toast } from 'react-hot-toast';


const Request = () => {

    const [email,setEmail] = useState();
    const [name,setName] = useState();
    const [course,setCourse] = useState();


    const dispatch = useDispatch();
    const {loading,error,message:requestMessage} = useSelector(state=>state.other);


    const submitHandler = (e)=>{
      e.preventDefault();
      dispatch(requestCourse(name,email,course));
    }

    useEffect(()=>{

      if(error){
        toast.error(error);
        dispatch({type:"clearError"});
      }

      
      if(requestMessage){
        toast.success(requestMessage);
        dispatch({type:"clearMessage"});
      }
    },[error,requestMessage]);

  return (
    <Container h={"100vh"}>
        <form onSubmit={submitHandler} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}>
        <VStack h={"full"} justifyContent={"center"} w={"80%"} spacing={"8"}>
        <Heading pb={"8"} children="Request a Course"/>
        
        <Input id={"name"} required type='text' value={name} onChange={(e)=>setName(e.target.value)} focusBorderColor='yellow.600' placeholder='Name'/>
        <Input id={"email"} required type='email' value={email} onChange={(e)=>setEmail(e.target.value)} focusBorderColor='yellow.600' placeholder='Email'/>
        <Textarea id='course' required value={course} onChange={(e)=>setCourse(e.target.value)} focusBorderColor='yellow.600' placeholder="Describe your course...."/>
            <HStack alignItems={"flex-start"} w={"full"}>
            <Button type='submit' isLoading={loading} w={"40"} colorScheme='yellow'>Send a Request</Button>
            </HStack>
        <HStack p={"3"}><Text children="Check out available"/><Link to={"/courses"}><Button colorScheme='yellow' variant={"link"}>Courses</Button></Link></HStack>
        </VStack>
        </form>
        
    </Container>
  )
}

export default Request