import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <Container centerContent h={"100vh"}>
        <VStack justifyContent={"center"} h={"full"}>
            <RiErrorWarningFill size={"5rem"}/>
        <Heading fontSize={"xl"} children="Page Not Found" textAlign={"center"} my={"8"}/>
        <Link to={"/"}>
        <Button variant={"link"} colorScheme='yellow'>Go to Home</Button>
        </Link>
        </VStack>
    </Container>
  )
}

export default NotFound