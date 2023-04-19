import { Box, VStack,Heading ,Text, HStack, Stack} from "@chakra-ui/react";
import {AiOutlineYoutube} from "react-icons/ai"
import {SiInstagram} from "react-icons/si"
import {ImLinkedin} from "react-icons/im"
import {VscGithub} from "react-icons/vsc"

export function Footer(){
    return(
        <Box padding={"4"} 
             bg={"black"}
             minH={"25vh"}
             >
                <Stack direction={["column","row"]} padding={"8"}> 
                <VStack w={"100%"} alignItems={"flex-start"}>
                    <Heading children="All rights reserved" color={"whiteAlpha.800"} fontFamily={"body"} fontSize={"lg"}/>
                    <Text children="9ovindyadav" color={"yellow"} />
                </VStack>
                <HStack fontSize={"30"} spacing={["2","10"]} w={"full"} justifyContent={"center"}>
                <a href="https://instagram.com/9ovindyadav" target="blank"><SiInstagram color="orange"/></a>
                   <a href="https://youtube.com/@9ovindyadav" target="blank"><AiOutlineYoutube color="red"/></a>
                   <ImLinkedin color="blue"/>
                   <VscGithub color="white"/>
                </HStack>
                </Stack>
             </Box>
    );
}