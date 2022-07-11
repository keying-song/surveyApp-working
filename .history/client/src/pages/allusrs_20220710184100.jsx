
import{useEffect, useState} from 'react'
import {Table, TableBody, TableRow, TableHead, TableCell} from "@mui/material";
import{getUser} from'../service/api.js';
const AllUsers = ()=>{
    



    useEffect(()=>{
        getAllUsers();
    }, []);
    const getAllUsers = async()=>{
      let response =  await getUser();
      console.log(response.data);
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
            </TableBody>
        </Table>

    )
}
export default AllUsers;