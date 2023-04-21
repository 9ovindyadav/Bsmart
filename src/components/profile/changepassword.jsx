import { Button, Container, HStack, Heading, Input, VStack,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import {changePassword} from "../../Redux/Actions/profile"
import { toast } from 'react-hot-toast';

const ChangePassword = () => {

    const [oldPassword,setOldPassword] = useState();
    const [newPassword,setNewPassword] = useState();

    const dispatch = useDispatch();
    
    const submitHandler = (e)=>{
      e.preventDefault();
     
      dispatch(changePassword(oldPassword,newPassword));
    
  }

const {loading,message,error} = useSelector(state=>state.profile);

useEffect(()=>{
if(error){
  toast.error(error);
  dispatch({type:"clearError"});
};
if(message){
  toast.success(message);
  dispatch({type:"clearMessage"});
}
},[dispatch,error,message]);


  return (
    <Container h={"100vh"}>
        <form onSubmit={submitHandler} style={{display:"flex",justifyContent:"center",height:"100%"}}>
        <VStack h={"full"} alignItems={"flex-start"} spacing={"2"} justifyContent={"center"}>
        <Heading pb={"8"} children="Change Password"/>
        
        <Input id={"oldPassword"} required type={'password'} value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} focusBorderColor='yellow.600' placeholder='Old Password'/>
        <Input id={"newPassword"} required type={'password'} value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} focusBorderColor='yellow.600' placeholder='New Password'/>
    

            <Button isLoading={loading} mt={"10"} type='submit' w={"40"} colorScheme='yellow'>Change</Button>
    
           </VStack>
        </form>
        
    </Container>
  )
}

export default ChangePassword;