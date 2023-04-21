import { Button, Container, HStack, Heading, Input, VStack,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { login } from '../../Redux/Actions/user';

const Login = () => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const dispatch = useDispatch();
    const submitHandler = (e)=>{
      e.preventDefault();
      dispatch(login(email,password));
    };

  return (
    <Container h={"100vh"}>
        <form onSubmit={submitHandler} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}>
        <VStack h={"full"} justifyContent={"center"}>
        <Heading pb={"8"} children="Login"/>
        
        <Input id={"email"} required type='email' value={email} onChange={(e)=>setEmail(e.target.value)} focusBorderColor='yellow.600' placeholder='Email'/>
        <Input id={"password"} required type='password' value={password} onChange={(e)=>setPassword(e.target.value)} focusBorderColor='yellow.600' placeholder='Password'/>
        <HStack spacing={"20"} pt={"10"} pb={"3"}>
            <Link to={"/forgetpassword"} children="Forget password"/>
            <Link to={"/resetpassword"} children="Reset password"/>
        </HStack>

            <Button mt={"10"} type='submit' w={"40"} colorScheme='yellow'>Login</Button>
    
        <HStack p={"3"}><Text children="New user?"/><Link to={"/register"}><Button colorScheme='yellow' variant={"link"}>Register</Button></Link></HStack>
        </VStack>
        </form>
        
    </Container>
  )
}

export default Login