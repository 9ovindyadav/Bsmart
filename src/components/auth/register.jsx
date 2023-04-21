import { Button, Container, HStack, Heading, Input, VStack,Text, Box, Avatar, FormLabel } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../../Redux/Actions/user'

export const fileUploadCss = {
    cursor :"pointer",
    marginLeft: "-5%",
    width: "110%",
    border: "none",
    height: "100%",
    color: "#ba9604",
    background: "transparent"
}

const fileUploadStyle = {
    "&::file-selector-button":fileUploadCss,
}

const Register = () => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [userName,setuserName] = useState();
    const [imgPrev,setimgPrev] = useState();
    const [image,setImage] = useState();

    const dispatch = useDispatch();

const imgUploadHandler = (e)=>{
     const file = e.target.files[0]; // first file only

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = ()=>{
         setimgPrev(reader.result); //it has only url of image
         setImage(file);  // file uploaded to it
}
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        const myForm = new FormData();
        
        myForm.append("name",userName);
        myForm.append("email",email);
        myForm.append("password",password);
        myForm.append("file",image);
        
        dispatch(register(myForm));
    }

  return (
    <Container h={"100vh"}>
    <form onSubmit={submitHandler} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}>
    <VStack h={"full"} w={"full"} justifyContent={"center"} spacing={"4"}>
        
    <Heading pb={"2"} children="Registration"/>
    <Avatar src={imgPrev}  size={"xl"}/>
    <Input id={"userName"} required type='text' value={userName} onChange={(e)=>setuserName(e.target.value)} focusBorderColor='yellow.600' placeholder='Name'/>
    <Input id={"email"} required type='email' value={email} onChange={(e)=>setEmail(e.target.value)} focusBorderColor='yellow.600' placeholder='Email'/>
    <Input id={"password"} required type='password' value={password} onChange={(e)=>setPassword(e.target.value)} focusBorderColor='yellow.600' placeholder='Password'/>

    <Box m={"4"}>
    <FormLabel>Choose Avtar</FormLabel>
    <Input
    accept='image/*'
    required
    type='file'
    id='chooseAvtar'
    focusBorderColor='yellow.500'
    css={fileUploadStyle}
    onChange={imgUploadHandler}
    />
    </Box>
<Box p={"5"} w={"full"}>
        <Button type='submit' w={"40"} colorScheme='yellow'>Sign Up</Button>
        </Box>
    <HStack p={"3"}><Text children="Already registered?"/><Link to={"/login"}><Button colorScheme='yellow' variant={"link"}>Login</Button></Link><Text children="here"/></HStack>
    </VStack>
    </form>
    
</Container>
  )
}

export default Register