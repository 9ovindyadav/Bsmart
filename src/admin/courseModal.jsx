import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { fileUploadCss } from '../components/auth/register';

const CourseModal = ({isOpen,
                      onClose,
                      Courseid,
                      deleteButtonHandler,
                      courseTitle,
                      lectures=[],
                      loading,
                      addLectureHandler}) => {


const [title,setTitle] = useState();
const [description,setDescription] = useState();
const [video,setVideo] = useState();
const [videoPre,setVideoPre] = useState();


const videoUploadHandler = (e)=>{
    const file = e.target.files[0]; // first file only

   const reader = new FileReader();

   reader.readAsDataURL(file);

   reader.onload = ()=>(
        setVideoPre(reader.result) //it has only url of image
        ,setVideo(file)  // file uploaded to it
   )
   } 


   const onCloseHandler = ()=>{
    setTitle("");
    setVideo("");
    setDescription("");
    setVideoPre("");
    onClose();
   };

  return (
   <Modal isOpen={isOpen} size={"full"} onClose={onCloseHandler} scrollBehavior='inside'>
      <ModalOverlay/>
        <ModalContent >
          <ModalHeader>{courseTitle}</ModalHeader>
          <ModalCloseButton/>
          <ModalBody p={"8"}>
           <Grid templateColumns={["1fr","3fr 1fr"]}>
            <Box px={["0","8"]}>
                <Box my={"5"}>
                    <Heading children={courseTitle}/>
                    <Heading children={`${Courseid}`} size={"sm"} opacity={"0.4"}/>
                </Box>

                <Heading size={"lg"} children="Lectures"/>

                {
                    lectures.map((item,index)=>(
                        <VideoCard
                        key={index}
                      title={item.title}
                      num={index+1}
                      description={item.description}
                      lectureId={item._id}
                      courseId={Courseid}
                      deleteButtonHandler={deleteButtonHandler}
                      loading={loading}
                />
                    ))
                }
            </Box>


<Box>
    <form onSubmit={(e)=>addLectureHandler(e,Courseid,title,description,video)}>

    <VStack spacing={"4"}>
        <Heading size={"md"} children="Add Lecture"/>
        <Input focusBorderColor='purple.600'
               placeholder='Title'
               value={title}
               onChange={(e)=>setTitle(e.target.value)}
        />
         
         
        <Input focusBorderColor='purple.600'
               placeholder='Description'
               value={description}
               onChange={(e)=>setDescription(e.target.value)}
        />

        
           <Input
              accept='video/mp4'
              required
              type='file'
              focusBorderColor='yellow.500'
              css={{"&::file-selector-button":{...fileUploadCss,color:"purple"}}}
              onChange={videoUploadHandler}
          />

          {
            videoPre && (
                <video controls
                      controlsList='nodownload'
                      src={videoPre}
                      ></video>
            )
          }
          <Button isLoading={loading} width={"full"} colorScheme='purple' type='submit' >Upload</Button>
    </VStack>

    </form>
</Box>

           </Grid>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='purple' onClick={onCloseHandler}>Close</Button>
        </ModalFooter>
        </ModalContent>
        
   </Modal>
  )
}

export default CourseModal;

function VideoCard({title,num,description,lectureId,courseId,deleteButtonHandler,loading}){
    return(
        <Stack direction={["column","row"]}
                  my={"8"}
                  borderRadius={"lg"}
                  boxShadow={"0 0 10px rgba(107,70,193,0.5)"}
                  justifyContent={["flex-start","space-between"]}
                  padding={["4","8"]}
        >
            <Box>
                <Heading size={"sm"} children={`#${num} ${title}`}/>
                <Text children={description}/>
            </Box>
            <Button isLoading={loading} color={"purple.600"} 
                  onClick={()=>deleteButtonHandler(courseId,lectureId)}
            ><RiDeleteBin7Fill/></Button>
        </Stack>
    );
}