import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";
import {useState} from 'react';
const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    &>div{
        margin-top:20px;
    }
`
const defaultValue={
    name:'',
    phone:'',
    email:''
}

const Adduser=()=>{
    const [user, setUser] = useState(defaultValue);
    const onValueChange=(e)=>{
        //console.log(e.target.name, e.target.value)
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
     }
     const addUserDetails=()=>{}

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
            <Button variant="contained" onClick={()=>addUserDetails()}>Add</Button>
            </FormControl>
        </Container>
    )
}

export default Adduser;