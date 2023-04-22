import { Box,Image ,Button, Container, HStack, Heading,Input,Stack,Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllCourses } from "../../Redux/Actions/course";
import toast from "react-hot-toast";
import { addToPlaylist } from "../../Redux/Actions/profile";
import { loadUser } from "../../Redux/Actions/user";


const CourseCard = ({title,description,imgSrc,id,addtoplaylistHandler,creator,lectureCount,views,loading})=>(
   <Stack mb={"10"} className="coureseCard" direction={["row","column"]} >
    <Image src={imgSrc} boxSize={"40"} objectFit={"contain"} />
   <VStack alignItems={"flex-start"} spacing={"2"}>
        
        <Heading fontSize={"2xl"} fontFamily={"body"} children={title}/>
        <Text fontSize={"sm"} children={description}/>
        <Text fontSize={"sm"} children={creator}/>
        <Text fontSize={"sm"} children={`Lectures -${lectureCount}`}/>
        <Text fontSize={"sm"} children={`Views -${views}`}/>
        <HStack>
          <Link to={`/course/${id}`}>
          <Button colorScheme="yellow">
            <Text children="Enroll Now"/>
          </Button>
          </Link>
          <Button isLoading={loading} onClick={()=>addtoplaylistHandler(id)} variant={"ghost"}>
            <Text children="Watchlist"/>
          </Button>
        </HStack>
    </VStack>
    </Stack>
)

export function Courses(){

    const [keyword,setKeyword] = useState();
    const [category,setCategory] = useState();

    const dispatch = useDispatch();
const params = useParams();
    const Category = ["Web Development",
                      "Android App Development",
                      "Desktop App Development",
                      "Python",
                      "Database Management",
                      "JavaScript Course"
                    ];

            
const addtoplaylistHandler = (courseId)=>{

  dispatch(addToPlaylist(courseId));

}

const {loading,courses,message,error} = useSelector(state=>state.course);

useEffect(()=>{
   

    if(error){
        toast.error(error);
        dispatch({type:"clearError"});
    };
    if(message){
        toast.success(message);
        dispatch({type:"clearMessage"});
    };
    dispatch(getAllCourses(category,keyword));
},[category,keyword,dispatch,message,error]);

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
               {
                courses.length > 0 ? courses.map((item)=>(
                    <CourseCard 
                           key={item._id}
                           id={item._id}
                           title={item.title} 
                           description={item.description}
                           imgSrc={item.poster.url}
                           addtoplaylistHandler={addtoplaylistHandler}
                           creator={item.createdBy}
                           lectureCount={item.numOfVideos}
                           views={item.views}
                           loading={loading}
                            />
                )) : <Heading fontSize={"xl"} children="Course not found"/>
               }

               </Stack>
        </Container>
    );
}