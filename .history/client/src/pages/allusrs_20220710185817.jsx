
import{useEffect, useState} from 'react'
import {Table, TableBody, TableRow, TableHead, TableCell} from "@mui/material";
import{getUser} from'../service/api.js';
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
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>phone</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user=>(
                        <TableRow>
                            <TableCell>{user._id}</TableCell>
                            
                        </TableRow>

                    ))



                }

            </TableBody>
        </Table>

    )
}
export default AllUsers;