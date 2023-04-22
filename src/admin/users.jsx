import React, { useEffect } from 'react'
import { AdminSideBar } from './dashboard'
import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import {useDispatch,useSelector} from "react-redux";
import { deleteUser, getAllUsers, updateUserRole } from '../Redux/Actions/admin';
import Loader from "../components/Loader/loader";
import { toast } from 'react-hot-toast';

const Users = () => {
  const dispatch = useDispatch();
const {users,loading,error,message} = useSelector(state=>state.admin);

const userRoleUpdateHandler = (userid)=>{
  dispatch(updateUserRole(userid));
  dispatch(getAllUsers());
}

const deleteUserHandler = (userid)=>{
  dispatch(deleteUser(userid));
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

  dispatch(getAllUsers());
},[dispatch,error,message])

  return (
    <Grid h={"100vh"} templateColumns={["1fr","5fr 1fr"]}>
  
        <Box p={['0','8']} overflow={"auto"}>

<Heading fontWeight={"medium"} children="All Users" my={"16"} textAlign={["center","left"]}/>
<TableContainer width={["100vw","full"]}>
  <Table variant={"simple"} size={"sm"}>
    <TableCaption>All Available users in the Database</TableCaption>

    <Thead>
      <Tr>
        <Th>#Id</Th>
        <Th>Name</Th>
        <Th>Email</Th>
        <Th>Role</Th>
        <Th>Subscription</Th>
        <Th isNumeric>Action</Th>
      </Tr>
    </Thead>

    <Tbody>
      {
       users && users.map((item)=>(
          <UserRow loading={loading} userRoleUpdateHandler={userRoleUpdateHandler} deleteUserHandler={deleteUserHandler} key={item._id} item={item}/>
        ))
      }
    </Tbody>
  </Table>
</TableContainer>

</Box>
    
   
<AdminSideBar/>
</Grid>
  )
}

export default Users;

function UserRow({item,deleteUserHandler,userRoleUpdateHandler,loading}){
  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{ item.subscription && item.subscription.status === "active" ? "Active" : "Not Active"}</Td>

      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button isLoading={loading} onClick={()=>userRoleUpdateHandler(item._id)} variant={"outline"} color={"purple.500"}>Change Role</Button>
          <Button isLoading={loading} onClick={()=>deleteUserHandler(item._id)} color={"purple.600"}><RiDeleteBin7Fill/></Button>
        </HStack>
      </Td>
    </Tr>
  );
}