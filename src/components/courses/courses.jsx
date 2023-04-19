import { Box,Image ,Button, Container, HStack, Heading,Input,Stack,Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CourseCard = ({title,description,imgSrc,Id,addtoplaylistHandler,creator,lectureCount,views})=>(
   <Stack mb={"10"} className="coureseCard" direction={["row","column"]} >
    <Image src={imgSrc} boxSize={"40"} objectFit={"contain"} />
   <VStack alignItems={"flex-start"} spacing={"2"}>
        
        <Heading fontSize={"2xl"} fontFamily={"body"} children={title}/>
        <Text fontSize={"sm"} children={description}/>
        <Text fontSize={"sm"} children={creator}/>
        <Text fontSize={"sm"} children={`Lectures ${lectureCount}`}/>
        <Text fontSize={"sm"} children={`Views ${views}`}/>
        <HStack>
          <Link to="/courses/id">
          <Button colorScheme="yellow">
            <Text children="Enroll Now"/>
          </Button>
          </Link>
          <Button onClick={addtoplaylistHandler} variant={"ghost"}>
            <Text children="Watchlist"/>
          </Button>
        </HStack>
    </VStack>
    </Stack>
)

export function Courses(){

    const [keyword,setKeyword] = useState();
    const [category,setCategory] = useState();

    const Category = ["Web Development",
                      "Android App Development",
                      "Desktop App Development",
                      "Python",
                      "Database Management",
                      "JavaScript Course"
                    ];
const id = "Sample";
const addtoplaylistHandler = (id)=>{
    console.log("Added to Playlist")
}


    return(
        <Container centerContent minH={"95vh"} maxW={"container.xl"} py={"8"} px={"10"} m={"5"} boxSize={"borderBox"}>
            <Heading children="All Courses" m={"8"}/>
            <Input w={"60%"} placeholder="Search the Courses..." type="text" value={keyword} onChange={(e)=>setKeyword(e.target.value)} />
        <HStack w={"full"} overflowX={"auto"} css={{"&::-webkit-scrollbar":{display: "none"}}} padding={"8"}>
            {
                Category.map((item,index)=>(
                    <Button key={index} onClick={()=>(setCategory(item))} focusBorderColor="yellow" minW={"60"} variant={"ghost"} >
                <Text children={item}/>
            </Button>
                ))
            }
        </HStack>
        <Stack w={"100%"} p={"4"} minH={"80vh"} direction={["column","row"]} 
               flexWrap={"wrap"} 
               justifyContent={["flex-start","center"]} 
               alignItems={["center","flex-start"]}
               >
               <CourseCard title={"Sample"} 
                           description={"Hello every one"}
                           imgSrc={"https://icons-for-free.com/iconfiles/png/512/command+develop+javascript+language+programming+software+icon-1320165727225308896.png"}
                           addtoplaylistHandler={()=>addtoplaylistHandler(id)}
                           creator={"Sample boy"}
                           lectureCount={"3"}
                           views={"100k"}
                            />

               </Stack>
        </Container>
    );
}