import React from 'react'
import { AdminSideBar } from './dashboard'
import { Box,Image, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './courseModal'

const AdminCourses = () => {

const users = [
  {
     _id: "sfhjsfgskjjksfd",
     title: "Education App",
     category: "Web development",
     createdBy: "Govind",
     poster: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rf39_0voDxAQV_CJIGeY5s-1qUY3gJ4B9LYwdFtk8A051st-xOFoEzBwhsYR3PZ3F0Y&usqp=CAU" },
     views: 400,
     nuofVideos: 15,
  },
]

const {isOpen,onOpen,onClose} = useDisclosure();

const courseDetailHandler = (courseid)=>(
  onOpen()
)

const deleteCourseHandler = (courseid)=>(
  console.log(courseid)
)

const deleteLectureButtonHandler = (courseId,lectureId)=>(
  console.log(lectureId),
  console.log(courseId)
)

const addLectureHandler = (e,courseId,title,description,video)=>(
  e.preventDefault()
)

  return (
    <Grid h={"100vh"} templateColumns={["1fr","5fr 1fr"]}>
    <Box p={['0','8']} overflow={"auto"}>

      <Heading fontWeight={"medium"} children="All Users" my={"16"} textAlign={["center","left"]}/>
      <TableContainer width={["100vw","full"]}>
        <Table variant={"simple"} size={"md"}>
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
              users.map((item)=>(
                <UserRow courseDetailHandler={courseDetailHandler} deleteCourseHandler={deleteCourseHandler} key={item._id} item={item}/>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>


<CourseModal isOpen={isOpen} 
             onClose={onClose} 
             id={"dsdjags"} 
             addLectureHandler={addLectureHandler} 
             deleteButtonHandler={deleteLectureButtonHandler} 
             coursetitle="React Course"
             />
    </Box>
   
<AdminSideBar/>
</Grid>
  )
}

export default AdminCourses;

function UserRow({item,deleteCourseHandler,courseDetailHandler}){
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
          <Button onClick={()=>courseDetailHandler(item._id)} variant={"outline"} color={"purple.500"}>View</Button>
          </Td>
          <Td isNumeric>
          <Button onClick={()=>deleteCourseHandler(item._id)} color={"purple.600"}><RiDeleteBin7Fill/></Button>
          </Td>
      
    </Tr>
  );
}