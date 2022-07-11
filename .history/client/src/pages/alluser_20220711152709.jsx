
import{useEffect, useState} from 'react'
import {Table, TableBody, TableRow, TableHead, TableCell, styled} from "@mui/material";
import{getUser} from'../service/api.js';

const StyledTable = styled(Table)`
    width:80%;
    margin:2em auto 0 auto;
`
const Thead = styled(TableRow)`
    background: #000000;

`



const AllUsers = ()=>{
    const [users, setUsers]=useState([]);
  

    useEffect(()=>{
        getAllUsers();
    }, []);
    const getAllUsers = async()=>{
      let response =  await getUser();
      setUsers(response.data);
      //console.log(response.data);
    }

    return(
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>phone</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map(user=>(
                        <TableRow>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.email}</TableCell>
                        </TableRow>

                    ))



                }

            </TableBody>
        </StyledTable>

    )
}
export default AllUsers;