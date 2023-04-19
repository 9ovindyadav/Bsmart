import { Container, Heading,Input,Button, VStack,Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ResetPassword = () => {

    const [password,setPassword] = useState();

    const param = useParams();

    console.log(param.token);


  return (
    <Container h={"70vh"}>
        <form style={{width:"30vw"}}>
    
            <Heading my={"10"} children="Reset Password"/>
            <Input required 
                   focusBorderColor='yellow.600' 
                   placeholder="New Password"
                   type='password' 
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                   />
           <Box my={"5"} > <Button type='submit' w={"full"} colorScheme='yellow' >Set New Password</Button></Box>
        </form>
    </Container>
  )
}

export default ResetPassword;