import { Avatar, Container, HStack, Heading, Stack, VStack,Text, Button,Image, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, Input, ModalHeader, ModalFooter } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaHorseHead } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fileUploadCss } from '../auth/register';

const Profile = () => {

const user = {
        _id: "fhjdsj1",
        name: "Govind",
        role: "adin",
        email: "govindsvyadav@gmail.com",
        username: "9ovindyadav",
        joiningDate: String(new Date().toISOString()),
        subscription:{
            status: "active",
        },
        playlist: [
            {
                course:"hgsdk",
                poster: "https://icons-for-free.com/iconfiles/png/512/command+develop+javascript+language+programming+software+icon-1320165727225308896.png",
            }
        ]
        
    };

    const removeFromPlaylistHandler = (id)=>(
            console.log(id)
    )

    const {isOpen,onClose,onOpen} = useDisclosure();

    const changeImageSubmitHandler = (e,image)=>(
            e.preventDefault(),
            console.log(image)
    )

  return (
    <Container minH={"100vh"} boxShadow={"lg"} maxW={"container.lg"} py={"8"} >
        <Heading textAlign={'center'} 
                 fontSize={"3xl"} 
                 fontFamily={"sans-serif"} 
                 opacity={"0.8"}
                 >
                    Profile
        </Heading>
        <Stack direction={['column','row']}
               justifyContent={"center"}
               spacing={"20"}
               padding={"10"}
               >
            <VStack spacing={"5"}>
                 <Avatar src={""} size={"xl"}/>
                 <Button onClick={onOpen} variant={"link"}  color={"yellow.500"}>Change Photo</Button>
                 <Heading fontSize={"xl"} 
                         children={user.name}
                         fontFamily={"sans-serif"}
                         opacity={"0.7"}
                />
            </VStack>
            <VStack alignItems={"flex-start"}>
               <HStack>
                    <Heading children="Name :"
                         fontFamily={"sans-serif"}
                         fontSize={"xl"}
                         fontWeight={"medium"}
                    />
                    <Heading children={user.name}
                         fontFamily={"sans-serif"}
                         fontSize={"xl"}
                         fontWeight={"medium"}
                    />
                </HStack>
                <HStack>
                    <Heading children="Username :"
                         fontFamily={"sans-serif"}
                         fontSize={"xl"}
                         fontWeight={"medium"}
                    />
                    <Heading children={user.username}
                         fontFamily={"sans-serif"}
                         fontSize={"xl"}
                         fontWeight={"medium"}
                    />
                </HStack>
                <HStack>
                    <Heading children="Email :"
                         fontFamily={"sans-serif"}
                         fontSize={"xl"}
                         fontWeight={"medium"}
                    />
                    <Heading children={user.email}
                         fontFamily={"sans-serif"}
                         fontSize={"xl"}
                         fontWeight={"medium"}
                    />
                </HStack>
                <HStack>
                    <Heading children="Join Since :"
                         fontFamily={"sans-serif"}
                         fontSize={"xl"}
                         fontWeight={"medium"}
                    />
                    <Heading children={user.joiningDate.split("T")[0]}
                         fontFamily={"sans-serif"}
                         fontSize={"xl"}
                         fontWeight={"medium"}
                    />
                </HStack>
              {
                user.role !== "admin" && <HStack>
                     <Heading children="Membership :"
                         fontFamily={"sans-serif"}
                         fontSize={"xl"}
                         fontWeight={"medium"}
                    />
                    {
                        user.subscription.status === "active" ? (
                            <Button color="yellow.600" variant={"unstyled"}>Cancel Subscription</Button>
                        ):(
                            <Link to={"/subscribe"}>
                                <Button color="red.600" variant={"unstyled"}>Subscribe Now</Button>
                            </Link>
                        )
                    }
                </HStack>
              }
                <HStack>
                    <Link to={"/updateprofile"}>
                    <Button variant={"ghost"} >Update Profile</Button>
                    </Link>
                    <Link to={"/changepassword"}>
                        <Button variant={"ghost"}>Change Password</Button>
                    </Link>
                </HStack>

    

            </VStack>
        </Stack>
        <Heading fontSize={"xl"} fontFamily={"body"} mx={"10"} children="Playlist"/>
          
          {
            user.playlist.length > 0 && (
                <Stack direction={["column","row"]}
                       alignItems={"center"}
                       flexWrap={"wrap"}
                       p={"4"}
                >
                {
                    user.playlist.map((item,index)=>(
                        <VStack w={"48"} m={"2"} key={item.course}>
                            <Image boxSize={"full"} objectFit="containe" src={item.poster} />
                            <HStack>
                                <Link to={"/courses/${id}"}>
                                    <Button size={"sm"} colorScheme='yellow'>Watch Now</Button>
                                </Link>
                                <Button onClick={()=>removeFromPlaylistHandler(item.course)} size={"sm"} colorScheme='yellow'>Remove</Button>
                            </HStack>
                        </VStack>
                    ))
                }
                </Stack>
            ) 
          }

          <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose}/>
    </Container>
  )
}

export default Profile;

function ChangePhotoBox({isOpen,onClose,changeImageSubmitHandler}){

    const [image,setImage] = useState();
    const [imgPrev,setimgPrev] = useState();

    const changeImage = (e)=>{
        const file = e.target.files[0]; // first file only
   
       const reader = new FileReader();
   
       reader.readAsDataURL(file);
   
       reader.onload = ()=>(
            setimgPrev(reader.result) //it has only url of image
            ,setImage(file)  // file uploaded to it
       )
       }

       const onCloseHandler = ()=>{
        onClose();
        setImage("");
        setimgPrev("");
       }


    return(
        <Modal isOpen={isOpen} onClose={onCloseHandler} >
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                    <HStack>
                        <Heading fontSize={"xl"} textAlign={"center"} w={"full"} children="Change Image"/>
                        <ModalCloseButton/>
                    </HStack>
                </ModalHeader>
                <ModalBody>
                <VStack spacing={"8"}>
                    <form onSubmit={(e)=>changeImageSubmitHandler(e,image)}>
                      { imgPrev && <Avatar src={imgPrev} boxSize={"48"}/>}
                      <Input onChange={changeImage} type='file' css={{"&::file-selector-button": fileUploadCss }}/>
                      <HStack justifyContent={"center"} my={"5"} spacing={"10"}>
                      <Button w={"6rem"} type="submit"  colorScheme='yellow'>Change</Button>
                      <Button w="6rem" variant={"ghost"}  onClick={onCloseHandler}>Close</Button>
                      </HStack>
                    </form>
                </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}