import { Box, Grid, Heading, VStack ,Text, background} from '@chakra-ui/react'
import React, { useState } from 'react'
import indroVideo from "../assets/videos/title.mp4"
const CoursePage = () => {

const [lectureNumber,setLectureNumber] = useState(0);

const lectures = [
    {
        _id:"sdhkasjdgk",
        title: "JavaScript",
        description: "djhaskgdasdgkljsladk",
        video: {
            url: "https:hfdakja"
        }
    },
    {
        _id:"sdhkasjdgk2",
        title: "JavaScript2",
        description: "djhaskgdasdgkljsladk",
        video: {
            url: "https:hfdakja"
        }
    },
    {
        _id:"sdhkasjdgk3",
        title: "JavaScript3",
        description: "djhaskgdasdgkljsladk",
        video: {
            url: "https:hfdakja"
        }
    },
]

  return (
    <Grid minH={"100vh"} templateColumns={["1fr","3fr 1.5fr"]}>
    
            <Box  alignSelf={"flex-start"} boxSize={"2xl"} w={"80%"} ml={"20"} mt={"10"}>
            <video 
                 src={indroVideo}
                 controls
                
                 controlsList="nodownload noremoteplayback"
                 disablePictureInPicture
                 disableRemotePlayback
                 ></video>
                 <Heading my={"4"} fontSize={"3xl"}
                 >{`# ${lectureNumber+1} ${lectures[lectureNumber].title}`}</Heading>
                 <Heading fontSize={"xl"} fontFamily={"sans-serif"}>Description</Heading>
                 <Text m={"2"}>{lectures[lectureNumber].description}</Text>
            </Box>
            
        <VStack mx={"4"} my={"16"}>  
            {
                lectures.map((item,index)=>(
                    <button
                     onClick={()=> setLectureNumber(index)}
                    key={item._id}
                    style={{
                        width:"100%",
                        border:"1px solid black",
                        padding:"1rem",
                        background:"#e8f2cb",
                        borderRadius: "1rem",
                        marginTop: "1rem"
                    }}
                    >
                        <Text noOfLines={1}>#{index+1} {item.title} </Text>
                    </button>
                ))
            }
        </VStack>
    </Grid>
  )
}

export default CoursePage