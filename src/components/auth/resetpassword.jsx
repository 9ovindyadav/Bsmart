import { Container, Heading,Input,Button, VStack,Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../../Redux/Actions/profile';
import { toast } from 'react-hot-toast';

const ResetPassword = () => {

    const [password,setPassword] = useState();

    const params = useParams();

    const {loading,error,message} = useSelector(state=>state.profile);
    const dispatch = useDispatch();
  
        const submitHandler = (e)=>{
          e.preventDefault();
        dispatch(resetPassword(params.token,password));
    
        }
    
        const navigate = useNavigate();
        useEffect(()=>{
          if(error){
            toast.error(error);
            dispatch({type:"clearError"});
          }
          
          if(message){
            toast.success(message);
            dispatch({type:"clearMessage"});
            navigate("/login");
          }
        },[dispatch,error,message]);


  return (
    <Container h={"70vh"}>
        <form onSubmit={submitHandler} style={{width:"30vw"}}>
    
            <Heading my={"10"} children="Reset Password"/>
            <Input required 
                   focusBorderColor='yellow.600' 
                   placeholder="New Password"
                   type='password' 
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                   />
           <Box my={"5"} > <Button isLoading={loading} type='submit' w={"full"} colorScheme='yellow' >Set New Password</Button></Box>
        </form>
    </Container>
  )
}

export default ResetPassword;