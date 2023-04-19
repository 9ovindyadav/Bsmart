import React from 'react'
import {ColorModeSwitcher} from "../../ColorModeSwitcher"
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from "react-icons/ri"
import {Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, VStack, useDisclosure, HStack } from '@chakra-ui/react'
import { GrBottomCorner } from 'react-icons/gr'
import {Link} from "react-router-dom"








const Header = () => {

const {isOpen, onClose,onOpen} = useDisclosure();
const userAuthonticated = true ;
const user = {
    role : "admin",
}

const DrawerButton = ( {url,title})=>(
    <Link onClick={onClose} to={url}>
    <Button variant={"ghost"}>{title}</Button>
    </Link>
)

const logOutHandler = ()=>{
    console.log("logout");
    onClose();
}

  return (<>
    <ColorModeSwitcher/>
    <Button onClick={onOpen} colorScheme='yellow' width={"12"} height={"12"} rounded={"full"} position={"fixed"} top={"6"} left={"6"}><RiMenu5Fill/></Button>

    <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerHeader borderBottomWidth={"2px"}>Course Bundler</DrawerHeader>
            <DrawerBody>
               <VStack alignItems={"flex-start"} spacing={"4"}>
                <DrawerButton url="/" title="Home"/>
                <DrawerButton url="/courses" title="Courses"/>
                <DrawerButton url="/request" title="Request a Course"/>
                <DrawerButton url="/contact" title="Contact"/>
                <DrawerButton url="/about" title="About"/>
               </VStack>

               <VStack>
                <HStack position={"absolute"} width={"80%"} justifyContent={"space-evenly"} bottom={"2rem"}>
                    {
                        userAuthonticated ? (<>
                         <VStack>
                            <HStack>
                            <Link onClick={onClose} to="/profile">
                            <Button colorScheme='yellow'>Profile</Button>
                            </Link>
                            
                            <Button onClick={logOutHandler} variant={"ghost"} colorScheme='yellow'><RiLogoutBoxLine style={{margin:"4px"}}/>LogOut</Button>
                            </HStack>
                        {
                           user && user.role==="admin" && <Link onClick={onClose} to="/admin/dashboard"><Button variant={"ghost"} colorScheme='purple'><RiDashboardFill style={{margin:"6px"}}/>Dashboard</Button></Link>
                        }

                        </VStack>    
                        </>): (<>
                        <Link onClick={onClose} to="/login">
                        <Button colorScheme='yellow'>LogIn</Button>
                        </Link>
                        <p>Or</p>
                        <Link onClick={onClose} to="/register">
                        <Button colorScheme='yellow'>SignUp</Button>
                        </Link>
                        </>) 
                    }
                </HStack>
               </VStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header