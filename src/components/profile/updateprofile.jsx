import { Button, Container, HStack, Heading, Input, VStack,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UpdateProfile = () => {

    const [email,setEmail] = useState();
    const [name,setName] = useState();

  return (
    <Container h={"100vh"}>
        <form style={{display:"flex",justifyContent:"center",height:"100%"}}>
        <VStack h={"full"} alignItems={"flex-start"} spacing={"2"} justifyContent={"center"}>
        <Heading pb={"8"} children="Update profile"/>
        
        <Input id={"name"} type='text' value={name} onChange={(e)=>setName(e.target.value)} focusBorderColor='yellow.600' placeholder='Name'/>
        <Input id={"email"} type='email' value={email} onChange={(e)=>setEmail(e.target.value)} focusBorderColor='yellow.600' placeholder='Email'/>
    

            <Button mt={"10"} type='submit' w={"full"} colorScheme='yellow'>Change</Button>
    
           </VStack>
        </form>
        
    </Container>
  )
}

export default UpdateProfile;