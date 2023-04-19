import React, { useState } from 'react'
import { AdminSideBar } from './dashboard'
import { Box, Button, Container, Grid, Heading, Image, Input, Select, VStack, color, useStatStyles } from '@chakra-ui/react'
import { fileUploadCss } from '../components/auth/register';

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

  return (
    <Grid minH={"100vh"} templateColumns={["1fr","5fr 1fr"]}>
    <Container centerContent py={"16"}>
      <form>
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

          <Button type='submit' colorScheme='purple' w={"full"}>Create</Button>
    </VStack>
      </form>
    </Container>
   
<AdminSideBar/>
</Grid>
  )
}

export default CreateCourses