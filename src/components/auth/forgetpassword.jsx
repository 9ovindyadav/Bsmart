import { Container, Heading,Input,Button, VStack,Box } from '@chakra-ui/react'
import React, { useState } from 'react'

const ForgetPassword = () => {

    const [email,setEmail] = useState();


  return (
    <Container h={"70vh"}>
        <form style={{width:"30vw"}}>
    
            <Heading my={"10"} children="Forget Password"/>
            <Input required 
                   focusBorderColor='yellow.600' 
                   placeholder="Email"
                   type='email' 
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   />
           <Box my={"5"} > <Button type='submit' w={"full"} colorScheme='yellow' >Send Reset Link</Button></Box>
        </form>
    </Container>
  )
}

export default ForgetPassword