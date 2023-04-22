import { Box, Container, Heading, VStack,Text, Button } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';




const PaymentSuccess = () => {

  const reference = useSearchParams()[0].get("reference");
  return (
    <Container centerContent h={"100vh"}>
        
        <Heading fontSize={"xl"} children="You have Pro Pack" textAlign={"center"} my={"8"}/>
        <Box px={"20"} w={"full"}>
        <VStack
                boxShadow={"lg"} 
                alignItems={"stretch"} 
                borderRadius={"lg"}
                spacing={"0"}
                > 
            <Box p={"3"} bg={"yellow.400"} css={{borderRadius:"8px 8px 0 0"}}>
            <Text fontSize={"xl"} textAlign={"center"} children="Payment Success"/>
            </Box>
            <Box p={"4"}>
               <VStack textAlign={"center"} spacing={"3"} px={"4"} mt={"4"}>
                  <Text fontSize={"xs"} children="Congratulation you are a pro member. you have access to premium contents"/>
                  <Heading size={"3xl"}>
                  <RiCheckboxCircleFill/>
                  </Heading>
               </VStack>
               <Link to={"/profile"}>
               <Button my={"8"} w={"full"} color={"yellow.500"} variant={"link"}>Go to Profile</Button>
               </Link>
               <Heading textAlign={"center"} size={"xs"}>Referenxe : {reference}</Heading>
            </Box>
          
        </VStack>
        </Box>
    </Container>
  )
}

export default PaymentSuccess