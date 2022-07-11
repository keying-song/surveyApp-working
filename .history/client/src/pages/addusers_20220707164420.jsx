import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    &>div{
        margin-top:20px;
    }
`
const onValueChange=(e)=>{
   return console.log(e.target.value)
}


const Adduser=()=>{
    return(
        <Container>
            <Typography variant="h4">add user</Typography>
            <FormControl>
                <InputLabel >Name</InputLabel>
                <Input onChange={(e)=>{onValueChange(e)}} />
            </FormControl>
            <FormControl>
                <InputLabel>phone</InputLabel>
                <Input  onChange={(e)=>{onValueChange(e)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>email</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
            <Button variant="contained">Add</Button>
            </FormControl>
        </Container>
    )
}

export default Adduser;