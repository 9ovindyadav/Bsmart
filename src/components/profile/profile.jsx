import { Avatar, Container, HStack, Heading, Stack, VStack,Text, Button,Image, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, Input, ModalHeader, ModalFooter } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaHorseHead } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { fileUploadCss } from '../auth/register';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPlaylist, updateprofilePicture } from '../../Redux/Actions/profile';
import { cancelSubscription, loadUser } from '../../Redux/Actions/user';
import toast from 'react-hot-toast';

const Profile = ({user}) => {
    
    const {isOpen,onClose,onOpen} = useDisclosure();

    const dispatch = useDispatch();
const {loading,error,message} = useSelector(state=>state.profile);
const {loading:subscriptionLoading,error:subscriptionError,message:subscriptionMessage} = useSelector(state=>state.subscription);

const removeFromPlaylistHandler = (id)=>{
 dispatch(removeFromPlaylist(id));
 dispatch(loadUser());
}
useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type:"clearError"});
    };
    if(message){
      toast.success(message);
      dispatch({type:"clearMessage"});
    }

    if(subscriptionError){
        toast.error(subscriptionError);
        dispatch({type:"clearError"});
      };
      if(subscriptionMessage){
        toast.success(subscriptionMessage);
        dispatch({type:"clearMessage"});
      }


    
    },[dispatch,error,message,loading,subscriptionLoading,subscriptionMessage,subscriptionError]);

    const changeImageSubmitHandler = (e,image)=>{
        e.preventDefault();
        const myForm = new FormData();
        myForm.append("file",image);
     dispatch(updateprofilePicture(myForm));
      dispatch(loadUser());
    }

    const cancelSubscriptionHandler = ()=>{
        dispatch(cancelSubscription());
    };

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
               mx={"20"}
               spacing={"20"}
               padding={"10"}
               >
            <VStack spacing={"5"}>
                 <Avatar src={ user.avatar.url} size={"xl"}/>
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
            
                    <Heading children={user.createdAt.split('T')[0]}
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
                       (user.subscription && user.subscription.status === "active") ? (
                            <Button onClick={cancelSubscriptionHandler} isLoading={subscriptionLoading} colorScheme='red'>Cancel Subscription</Button>
                        ):(
                            <Link to={"/subscribe"}>
                                <Button colorScheme='yellow'>Subscribe Now</Button>
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
                                <Button isLoading={loading} onClick={()=>removeFromPlaylistHandler(item.course)} size={"sm"} colorScheme='yellow'>Remove</Button>
                            </HStack>
                        </VStack>
                    ))
                }
                </Stack>
            ) 
          }

          <ChangePhotoBox loading={loading} changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose}/>
    </Container>
  )
}

export default Profile;

function ChangePhotoBox({isOpen,onClose,changeImageSubmitHandler,loading}){

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
                      <Button isLoading={loading} w={"6rem"} type="submit"  colorScheme='yellow'>Change</Button>
                      <Button w="6rem" variant={"ghost"}  onClick={onCloseHandler}>Close</Button>
                      </HStack>
                    </form>
                </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}