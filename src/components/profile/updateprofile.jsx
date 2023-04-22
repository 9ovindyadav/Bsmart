import { Button, Container, HStack, Heading, Input, VStack,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { updateprofile } from '../../Redux/Actions/profile';
import { loadUser } from '../../Redux/Actions/user';

const UpdateProfile = ({user}) => {

    const [email,setEmail] = useState(user.email);
    const [name,setName] = useState(user.name);

    const navigate = useNavigate();
const dispatch = useDispatch();
const {loading} = useSelector(state=>state.profile)

    const submitHandler = (e)=>{
      e.preventDefault();
     
     dispatch(updateprofile(name,email));
      
       dispatch(loadUser());
       navigate("/profile");
  }

  return (
    <Container h={"100vh"}>
        <form onSubmit={submitHandler} style={{display:"flex",justifyContent:"center",height:"100%"}}>
        <VStack h={"full"} alignItems={"flex-start"} spacing={"2"} justifyContent={"center"}>
        <Heading pb={"8"} children="Update profile"/>
        
        <Input id={"name"} type='text' value={name} onChange={(e)=>setName(e.target.value)} focusBorderColor='yellow.600' placeholder='Name'/>
        <Input id={"email"} type='email' value={email} onChange={(e)=>setEmail(e.target.value)} focusBorderColor='yellow.600' placeholder='Email'/>
    

            <Button isLoading={loading} mt={"10"} type='submit' w={"full"} colorScheme='yellow'>Change</Button>
    
           </VStack>
        </form>
        
    </Container>
  )
}

export default UpdateProfile;