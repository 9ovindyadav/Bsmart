import { Box, Container, Heading, VStack,Text, Button } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
    <Container centerContent h={"100vh"}>
        
        <Heading size={"xl"} children="Welcome" textAlign={"center"} my={"8"}/>
        <Box px={"20"} w={"full"}>
        <VStack
                boxShadow={"lg"} 
                alignItems={"stretch"} 
                borderRadius={"lg"}
                spacing={"0"}
                > 
            <Box p={"3"} bg={"yellow.400"} css={{borderRadius:"8px 8px 0 0"}}>
            <Text fontSize={"xl"} textAlign={"center"} children="Pro pack -  ₹299"/>
            </Box>
            <Box p={"4"}>
               <VStack textAlign={"center"} spacing={"8"} px={"4"} mt={"8"}>
                  <Text children="Buy now and get access to all the contents"/>
                  <Heading size={"md"} children="₹299 Only"/>
               </VStack>
               <Button my={"8"} w={"full"} colorScheme='yellow'>Buy now</Button>
            </Box>
            <Box p={"3"} bg={"blackAlpha.400"} css={{borderRadius:"0 0 8px 8px"}}>
            <Text fontSize={"md"} children="100% Refund after Cancelation"/>
            <Text fontSize={"xs"} color={"white"} children="Terms & Conditions Apply"/>
            </Box>
        </VStack>
        </Box>
    </Container>
  )
}

export default Subscribe