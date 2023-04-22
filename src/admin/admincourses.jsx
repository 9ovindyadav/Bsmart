import React, { useEffect, useState } from 'react'
import { AdminSideBar } from './dashboard'
import { Box,Image, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './courseModal'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourses, getCourseLectures } from '../Redux/Actions/course'
import { addLecture, deleteCourse, deleteLecture } from '../Redux/Actions/admin'
import { toast } from 'react-hot-toast'
import Loader from "../components/Loader/loader";

const AdminCourses = () => {

  const dispatch = useDispatch();
  const {courses,lectures} = useSelector(state=>state.course);

  const {loading,error,message} = useSelector(state=>state.admin)
const {isOpen,onOpen,onClose} = useDisclosure();

const [courseId,setCourseId] = useState("");
const [courseTitle,setcourseTitle] = useState("");

const courseDetailHandler = (courseId,title)=>{
  onOpen();
  dispatch(getCourseLectures(courseId));
  setCourseId(courseId);
  setcourseTitle(title);
}

const deleteCourseHandler = (courseId)=>{
  dispatch(deleteCourse(courseId));
}
  

const deleteLectureButtonHandler = async (courseId,lectureId)=>{

  await dispatch(deleteLecture(courseId,lectureId));
  dispatch(getCourseLectures(courseId));
}


const addLectureHandler = async (e,courseId,title,description,video)=>{
  e.preventDefault();
  const myForm = new FormData();
        
  myForm.append("title",title);
  myForm.append("description",description);
  myForm.append("file",video);
  
 await dispatch(addLecture(courseId,myForm));
 dispatch(getCourseLectures(courseId));

}



useEffect(()=>{

  if(error){
    toast.error(error);
    dispatch({type:"clearError"});
  }
  if(message){
    toast.success(message);
    dispatch({type:"clearMessage"});
  }
  dispatch(getAllCourses());

},[dispatch,message,error]);

  return (
    <Grid h={"100vh"} templateColumns={["1fr","5fr 1fr"]}>
    {
      loading ? <Loader color='purple.500'/> : (
        <>
        <Box p={['0','8']} overflow={"auto"}>

<Heading fontWeight={"medium"} children="All Course" my={"16"} textAlign={["center","left"]}/>
<TableContainer width={["100vw","full"]}>
  <Table variant={"simple"} size={"sm"}>
    <TableCaption>All Available Courses in the Database</TableCaption>

    <Thead>
      <Tr>
      <Th>#Id</Th>
        <Th>Poster</Th>
        <Th>Title</Th>
        <Th>Category</Th>
        <Th>Creator</Th>
        <Th isNumeric>Views</Th>
        <Th isNumeric>Lectures</Th>
        <Th isNumeric>Action</Th>
      </Tr>
    </Thead>

    <Tbody>
      {
        courses.map((item)=>(
          <UserRow courseDetailHandler={courseDetailHandler} deleteCourseHandler={deleteCourseHandler} loading={loading} key={item._id} item={item}/>
        ))
      }
    </Tbody>
  </Table>
</TableContainer>


<CourseModal isOpen={isOpen} 
       onClose={onClose} 
       Courseid={courseId} 
       addLectureHandler={addLectureHandler} 
       deleteButtonHandler={deleteLectureButtonHandler} 
       courseTitle={courseTitle}
       lectures={lectures}
       loading={loading}
       />
</Box>
        </>
      )
    }
   
<AdminSideBar/>
</Grid>
  )
}

export default AdminCourses;

function UserRow({item,deleteCourseHandler,courseDetailHandler,loading}){
  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image objectFit={"contain"} src={item.poster.url}/>
      </Td>
      <Td>{item.title}</Td>
      <Td>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td>{item.views}</Td>

      <Td isNumeric>
          <Button isLoading={loading} onClick={()=>courseDetailHandler(item._id, item.title)} variant={"outline"} color={"purple.500"}>View</Button>
          </Td>
          <Td isNumeric>
          <Button isLoading={loading} onClick={()=>deleteCourseHandler(item._id)} color={"purple.600"}><RiDeleteBin7Fill/></Button>
          </Td>
      
    </Tr>
  );
}