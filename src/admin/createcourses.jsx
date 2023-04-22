import React, { useEffect, useState } from 'react'
import { AdminSideBar } from './dashboard'
import { Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
import { fileUploadCss } from '../components/auth/register';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from '../Redux/Actions/admin';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { loadUser } from '../Redux/Actions/user';
import { getAllCourses } from '../Redux/Actions/course';


const CreateCourses = () => {

const [title,setTitle] = useState();
const [description,setDescription] = useState();
const [createdBy,setCreatedBy] = useState();
const [image,setImage] = useState();
const [iamgePre,setImagePre] = useState();
const [category,setCategory] = useState();

const Category = ["Web Development",
                      "Android App Development",
                      "Desktop App Development",
                      "Python",
                      "Database Management",
                      "JavaScript Course"
                    ];


 const imgUploadHandler = (e)=>{
     const file = e.target.files[0]; // first file only

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = ()=>(
         setImagePre(reader.result) //it has only url of image
         ,setImage(file)  // file uploaded to it
    )
    }                   
const dispatch = useDispatch();

const {loading,message,error} = useSelector(state=>state.admin);

const SubmitHandler = (e)=>{
  e.preventDefault();

  const myForm = new FormData();

  myForm.append("title",title);       
  myForm.append("description",description);
  myForm.append("category",category);
  myForm.append("createdBy",createdBy);
  myForm.append("file",image);

  dispatch(createCourse(myForm));
dispatch(loadUser());
};

useEffect(()=>{
  if(error){
    toast.error(error);
    dispatch({type:"clearError"});
  }
  if(message){
    toast.success(message);
    dispatch({type:"clearMessage"});
  }
},[dispatch,error,message])

  return (
    <Grid minH={"100vh"} templateColumns={["1fr","5fr 1fr"]}>
    <Container centerContent py={"16"}>
      <form onSubmit={SubmitHandler}>
      <Heading children="Create Course" my={"16"} textAlign={["center","left"]}/>
    <VStack spacing={"3"}>
    <Input required t ype='text'
             value={title}
             placeholder='Title'
             onChange={(e)=>setTitle(e.target.value)}
             focusBorderColor="purple.500"
      />
       <Input type='text'
             value={description}
             placeholder='Description'
             onChange={(e)=>setDescription(e.target.value)}
             focusBorderColor="purple.500"
      />
       <Input type='text'
             value={createdBy}
             placeholder='Created By'
             onChange={(e)=>setCreatedBy(e.target.value)}
             focusBorderColor="purple.500"
      />

      <Select
           value={category}
           onChange={(e)=>setCategory(e.target.value)}
           focusBorderColor='purple.400'
      >
        <option value="">Category</option>
         {
          Category.map((item)=>(
            <option key={item} value={item}>{item}</option>
          ))
         }

      </Select>

         <Input
              accept='image/*'
              required
              type='file'
              focusBorderColor='yellow.500'
              css={{"&::file-selector-button":{...fileUploadCss,color:"purple"}}}
              onChange={imgUploadHandler}
          />

          {iamgePre && <Image objectFit={"contain"} boxSize={"48"} src={iamgePre} />}

          <Button isLoading={loading} type='submit' colorScheme='purple' w={"full"}>Create</Button>
    </VStack>
      </form>
    </Container>
   
<AdminSideBar/>
</Grid>
  )
}

export default CreateCourses