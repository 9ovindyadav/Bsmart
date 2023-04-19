import { Button, Container, HStack, Heading, Input, VStack,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ChangePassword = () => {

    const [oldPassword,setOldPassword] = useState();
    const [newPassword,setNewPassword] = useState();

  return (
    <Container h={"100vh"}>
        <form style={{display:"flex",justifyContent:"center",height:"100%"}}>
        <VStack h={"full"} alignItems={"flex-start"} spacing={"2"} justifyContent={"center"}>
        <Heading pb={"8"} children="Change Password"/>
        
        <Input id={"oldPassword"} required type='password' value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} focusBorderColor='yellow.600' placeholder='Old Password'/>
        <Input id={"newPassword"} required type='password' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} focusBorderColor='yellow.600' placeholder='New Password'/>
    

            <Button mt={"10"} type='submit' w={"40"} colorScheme='yellow'>Change</Button>
    
           </VStack>
        </form>
        
    </Container>
  )
}

export default ChangePassword;