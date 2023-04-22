import { Box, Grid, Heading, VStack ,Text, background} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import indroVideo from "../assets/videos/title.mp4"
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getCourseLectures } from '../Redux/Actions/course';
import Loader from '../components/Loader/loader';


const CoursePage = ({user}) => {

const [lectureNumber,setLectureNumber] = useState(0);

const {lectures,loading} = useSelector(state=>state.course);


const dispatch = useDispatch();
const params = useParams();

useEffect(()=>{
 dispatch(getCourseLectures(params.id));   
},[dispatch,params.id]);


if(user.role !== "admin" && (user.subscription===undefined || user.subscription.status !== "active")){
return <Navigate to={"/subscribe"}/>
}

  return (
    
        loading ? <Loader/> : (<>
            <Grid minH={"100vh"} templateColumns={["1fr","3fr 1.5fr"]}>
    
           {
            lectures && lectures.length > 0 ? (
                <>
                 <Box  alignSelf={"flex-start"} boxSize={"2xl"} w={"80%"} ml={"20"} mt={"10"}>
            <video 
                 src={lectures[lectureNumber].video.url}
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
                </>
            ) : <Heading children="No lectures"/>
           }
    </Grid>
            </>)
    
  )
}

export default CoursePage;