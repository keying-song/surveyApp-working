import {FormControl, FormGroup, InputLabel, Input, Typography, styled, Button} from "@mui/material";

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    &>div{
        margin-top:20px;
    }
`
const 


const Adduser=()=>{
    return(
        <Container>
            <Typography variant="h4">add user</Typography>
            <FormControl>
                <InputLabel onChange={()=>{onValueChange()}}>Name</InputLabel>
                <Input/>
            </FormControl>
            <FormControl>
                <InputLabel>phone</InputLabel>
                <Input/>
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