import { Button, Center, HStack, Heading, VStack} from "@chakra-ui/react";
import React from "react";
import { Text,Link,Image,Box ,Stack} from "@chakra-ui/react";
import "./home.css"
import vg from "../../assets/images/home-vg.png"
import { GrYoutube} from "react-icons/gr"
import {FcGoogle} from "react-icons/fc"
import {SiUdemy} from "react-icons/si"
import indroVideo from "../../assets/videos/title.mp4"



function Home(){
    return(
        <section className="home">
            <div className="container">
                <Stack direction={["column","row"]}
                       h={"100%"}
                       justifyContent={["center","flex-start"]}
                       alignItems={["center","space-between"]}
                       spacing={["16","30"]}
                       >
                    <VStack h={"20%"} w={"full"} alignItems={['center','flex-end']} spacing={"8"}>
                    <Heading children="Study Materials"/>
                    <Text fontSize={"xl"} fontFamily={"cursive"} >Get Your Course and start now to stand apart from others</Text>
                    <Link to="/courses">
                        <Button 
                           colorScheme="yellow" 
                           fontSize={"lg"}
                           >
                            Explore Now
                        </Button>
                    </Link>
                    </VStack>
                    <Image className="vg" objectFit={"contain"} boxSize={"md"} src={vg} />
                    </Stack>
           </div>

            <Box padding={"8"} bg={"black"} >
                    <Heading color={"yellow.400"} textAlign={"center"} fontFamily={"body"} children="Our Brands"/>
                    <HStack className="brands" justifyContent={"space-around"} marginTop={"5"}>
                      <GrYoutube/>
                      <FcGoogle/>
                    
                      <SiUdemy/>
                    
                    </HStack>
            </Box>

            <div className="container2">
                <video 
                 src={indroVideo}
                 controls
                
                 controlsList="nodownload nofullscreen noremoteplayback"
                 disablePictureInPicture
                 disableRemotePlayback
                 ></video>

            </div>
        </section>
    )
    
}

export default Home;