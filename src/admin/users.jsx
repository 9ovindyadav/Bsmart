import React from 'react'
import { AdminSideBar } from './dashboard'
import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { RiDeleteBin7Fill } from 'react-icons/ri'

const Users = () => {

const users = [
  {
     _id: "sfhjsfgskjjksfd",
     name: "Govind",
     role: "admin",
     email: "govindsvyadav@gmail.com",
     subscription: {
      status: "active",
     }

  },
]

const userRoleUpdateHandler = (userid)=>(
  console.log(userid)
)

const deleteUserHandler = (userid)=>(
  console.log(userid)
)

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
              users.map((item)=>(
                <UserRow userRoleUpdateHandler={userRoleUpdateHandler} deleteUserHandler={deleteUserHandler} key={item._id} item={item}/>
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

function UserRow({item,deleteUserHandler,userRoleUpdateHandler}){
  return(
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status === "active" ? "Active" : "Not Active"}</Td>

      <Td isNumeric>
        <HStack justifyContent={"flex-end"}>
          <Button onClick={()=>userRoleUpdateHandler(item._id)} variant={"outline"} color={"purple.500"}>Change Role</Button>
          <Button onClick={()=>deleteUserHandler(item._id)} color={"purple.600"}><RiDeleteBin7Fill/></Button>
        </HStack>
      </Td>
    </Tr>
  );
}