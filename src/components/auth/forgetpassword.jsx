import { Container, Heading,Input,Button, VStack,Box, useEditable } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../Redux/Actions/profile';
import { toast } from 'react-hot-toast';

const ForgetPassword = () => {

    const [email,setEmail] = useState();

    const {loading,error,message} = useSelector(state=>state.profile);
const dispatch = useDispatch();

    const submitHandler = (e)=>{
      e.preventDefault();
    dispatch(forgetPassword(email));

    }

    useEffect(()=>{
      if(error){
        toast.error(error);
        dispatch({type:"clearError"});
      }
      
      if(message){
        toast.success(message);
        dispatch({type:"clearMessage"});
      }
    },[dispatch,error,message]);

  return (
    <Container h={"70vh"}>
        <form onSubmit={submitHandler} style={{width:"30vw"}}>
    
            <Heading my={"10"} children="Forget Password"/>
            <Input required 
                   focusBorderColor='yellow.600' 
                   placeholder="Email"
                   type='email' 
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   />
           <Box my={"5"} > <Button isLoading={loading} type='submit' w={"full"} colorScheme='yellow' >Send Reset Link</Button></Box>
        </form>
    </Container>
  )
}

export default ForgetPassword