import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'


const PaymentFail = () => {
  return (
    <Container centerContent h={"100vh"}>
        <VStack justifyContent={"center"} h={"full"}>
            <RiErrorWarningFill size={"5rem"}/>
        <Heading fontSize={"xl"} children="Payment Fail" textAlign={"center"} my={"8"}/>
        <Link to={"/subscribe"}>
        <Button variant={"link"} colorScheme='yellow'>Try again</Button>
        </Link>
        </VStack>
    </Container>
  )
}

export default PaymentFail