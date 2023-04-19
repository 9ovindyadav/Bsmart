import { Button, Container, HStack, Heading, Input, VStack,Text, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

    const [email,setEmail] = useState();
    const [name,setName] = useState();
    const [message,setMessage] = useState();


  return (
    <Container h={"100vh"}>
        <form style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}>
        <VStack h={"full"} justifyContent={"center"} w={"80%"} spacing={"8"}>
        <Heading pb={"8"} children="Contact us"/>
        
        <Input id={"name"} required type='text' value={name} onChange={(e)=>setName(e.target.value)} focusBorderColor='yellow.600' placeholder='Name'/>
        <Input id={"email"} required type='email' value={email} onChange={(e)=>setEmail(e.target.value)} focusBorderColor='yellow.600' placeholder='Email'/>
        <Textarea id='message' required value={message} onChange={(e)=>setMessage(e.target.value)} focusBorderColor='yellow.600' placeholder="Your message"/>
            <HStack alignItems={"flex-start"} w={"full"}>
            <Button type='submit' w={"40"} colorScheme='yellow'>Send a Mail</Button>
            </HStack>
        <HStack p={"3"}><Text children="Want to"/><Link to={"/request"}><Button colorScheme='yellow' variant={"link"}>Request</Button></Link> <Text children="a course ?"/></HStack>
        </VStack>
        </form>
        
    </Container>
  )
}

export default Contact