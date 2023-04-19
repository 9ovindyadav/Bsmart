import { Box, Button, Grid, Icon, VStack,Text, Heading, Stack, HStack, Progress } from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiArrowDownLine, RiArrowUpLine, RiDashboardFill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import { DoubnutChart, LineChart } from './chart';




const DataBox = ({title,qty,qtyPercent,profit})=>(
         <Box w={['full','20%']}
              boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}
              p={"4"}
              borderRadius={"lg"}

              >
              <Text fontSize={"2xl"} children={title}/>
              <HStack spacing={"5"}>
                <Text fontWeight={"bold"} fontSize={"2xl"} children={qty}/>
                <HStack>
                    <Text fontSize={"xl"} fontWeight={"bold"} children={`${qtyPercent}%`}/>
                    {
                        profit ? <RiArrowUpLine color='green'/> : <RiArrowDownLine color='red'/>
                    }
                </HStack>
              </HStack>
              <Text children="Since last Month"/>
         </Box>
)



const Bar = ({title,value,profit})=>(
  <Box px={["0","20"]} py={"8"}>
    <Heading children={title} size={"sm"} mb={"2"}/>
    <HStack w={"full"} alignItems={"center"}>
      <Text children={profit>0? "0%":`-${value}%`}/>
      <Progress w={"full"} colorScheme='purple' value={value}/>
      <Text children={`${value>100?value:100}%`}/>
    </HStack>
  </Box>
)

const dashboard = () => {



  return (
    <Grid minH={"100vh"} templateColumns={["1fr","5fr 1fr"]}>
        <Box
        boxSizing="border-box"
        py={"16"}
        px={['4','0']}
        >
      <Text textAlign={"center"} 
            opacity={"0.9"} 
            children={`Last change was made on ${String(new Date()).split("G")[0]}`}
       />

       <Heading children="Dashboard"
                ml={['0','16']}
                textAlign={['center','left']}
                fontSize={"xl"} mb={"16"}
       />

       <Stack direction={['column','row']}
              minH={"24"}
              justifyContent={"space-evenly"} 
       >
        <DataBox title="View" qty={234} qtyPercent={80} profit={true}  />
        <DataBox title="Users" qty={600} qtyPercent={62} profit={true}  />
        <DataBox title="Subscribers" qty={200} qtyPercent={20} profit={false}  />
       </Stack>

<Box 
   m={["0","16"]}
   p={["0","16"]}
   mt={["4","16"]}
   boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}
>
  <Heading children="Views Graph" size={"md"} textAlign={["center","left"]} pt={["8","0"]} ml={["0","16"]}/>

  {/* Line Graph here */}
  <LineChart/>

</Box>

<Grid templateColumns={["1fr","2fr 1fr"]}>
  
  <Box p={"4"}>
  <Heading textAlign={["center","left"]}
           children="Progress Bar"
           size={"md"}
           ml={["0","16"]}
           my={"8"}
  />
  <Box>
    <Bar profit={true} title="Views" value={80}/>
    <Bar profit={true} title="Users" value={62}/>
    <Bar profit={false} title="Subscriptions" value={20}/>
  </Box>

  </Box>

  <Box boxSizing={"border-box"} p={["0","16"]} py={"4"}>
    <Heading children="Users" textAlign={"center"} size={"md"} mb={"4"}/>

    {/* Doubnut Graph */}

    <DoubnutChart/>
  </Box>
</Grid>

        </Box>
       
    <AdminSideBar/>
    </Grid>
  )
}

export default dashboard;

function LinkButtons({url,btnName,iconName,active}){
    return(
        <Link to={`/admin/${url}`}><Button w={"full"} variant={"ghost"} colorScheme={ active ? "purple" : ""}><Icon as={iconName} mx={"1"}/> {btnName}</Button></Link>
    );
}

export const AdminSideBar = ()=>{
    const location = useLocation();
    return(
        <VStack alignItems={"flex-start"} pt={"20"} spacing={"3"} boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}>
        <LinkButtons url="dashboard" btnName="Dashboard" active={location.pathname === "/admin/dashboard"} iconName={RiDashboardFill}/>
        <LinkButtons url="createcourses" btnName="Create Course" active={location.pathname === "/admin/createcourses"} iconName={RiAddCircleFill}/>
        <LinkButtons url="courses" btnName="Courses" active={location.pathname === "/admin/courses"} iconName={RiDashboardFill}/>
        <LinkButtons url="users" btnName="Users" active={location.pathname === "/admin/users"} iconName={RiDashboardFill}/>
     </VStack>
    )
    
} 