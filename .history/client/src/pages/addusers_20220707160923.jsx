import {FormControl, FormGroup, InputLabel, Input, Typography, styled} from "@mui/material";

const Container = styled(FormGroup)``



const Adduser=()=>{
    return(
        <FormGroup>
            <Typography variant="h4">add user</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
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
        </FormGroup>
    )
}

export default Adduser;