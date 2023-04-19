import { Avatar, Container, Heading, Stack, VStack,Text,HStack,Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import indroVideo from "../../assets/videos/title.mp4"
import { RiSecurePaymentFill } from 'react-icons/ri'
import { TermsandCondition } from '../../assets/docs/termsandcondition'


const TandC = ({TermsandCondition})=>(
    <Box mx={"10"} >
        <Heading textAlign={"left"} size={"md"} children="Terms & Condition"/>
        <Box h={"xs"} w={"3xl"} p={"4"} overflowY={"scroll"}>
            <Text>{TermsandCondition}</Text>
            <Heading my={"5"} size={"xs"} children="Refund only applicable for cancellation within 7 days" fontFamily={"sans-serif"}/>
        </Box>
    </Box>
)

const About = () => {
  return (
    <Container maxW={"container.lg"} boxShadow={"lg"}>
        <Stack direction="column">
            <Heading textAlign={"center"} p={"10"} fontSize={"3xl"} children="About us"/>
           <Stack direction={"row"} px={"40"} spacing={"10"}> 
            <VStack>
                <Avatar boxSize={["30","40"]}/>
                <Heading fontSize={"2xl"} fontFamily={"body"} opacity={"0.7"} children="Co Founder"/>
            </VStack>
            <VStack w={"full"} justifyContent={"center"}>
                <Heading fontSize={"2xl"} children="Govind yadav"/>
                <Text children="Hello i am a Full stack Developer and a teacher.
                
                our mission is to provide quality content at reasonable price ."/>
            </VStack>
            </Stack>
            <HStack p={"10"} spacing={"10"}>
                <Text children="We are video streaming platform with some amazing courses 
                with good quality teachers and amazing subjects"/>

                <Link to={"/subscribe"}>
                <Button variant={"ghost"} colorScheme='yellow'>Check out our Plans</Button>
                </Link>
            </HStack>
           <HStack w={"full"} justifyContent={"center"} p={"10"}>
            <Box w={"60%"}  p={"1"}>
            <video 
                 src={indroVideo}
                 controls
                 autoPlay
                 muted
                 controlsList="nodownload nofullscreen noremoteplayback"
                 disablePictureInPicture
                 disableRemotePlayback
                 ></video>
            </Box>
            </HStack>
        </Stack>
        <TandC TermsandCondition={TermsandCondition}/>
        <HStack p={"4"} ms={"10"}>
            <RiSecurePaymentFill/>
            <Heading children="Payment is secured by Razorpay" size={"xs"} fontFamily={"sans-serif"}/>
        </HStack>
    </Container>
  )
}

export default About