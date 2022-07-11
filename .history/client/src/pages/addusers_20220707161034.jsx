import {FormControl, FormGroup, InputLabel, Input, Typography, styled} from "@mui/material";

const Container = styled(FormGroup)`
    width:50%;
`



const Adduser=()=>{
    return(
        <>
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
        </>
    )
}

export default Adduser;