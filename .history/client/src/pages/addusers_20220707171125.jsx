import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
import {useState} from "react"
const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    &>div{
        margin-top:20px;
    }
`
const onValueChange=(e)=>{
   return console.log(e.target.name, e.target.value)
}


const Adduser=()=>{
    return(
        <Container>
            <Typography variant="h4">add user</Typography>
            <FormControl>
                <InputLabel >Name</InputLabel>
                <Input onChange={(e)=>{onValueChange(e)}} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>phone</InputLabel>
                <Input  onChange={(e)=>{onValueChange(e)}} name="phone"/>
            </FormControl>
            <FormControl>
                <InputLabel>email</InputLabel>
                <Input  onChange={(e)=>{onValueChange(e)}} name="email"/>
            </FormControl>
            <FormControl>
            <Button variant="contained">Add</Button>
            </FormControl>
        </Container>
    )
}

export default Adduser;