import {FormControl, FormGroup, InputLabel, Input} from "@mui/material";

const Adduser=()=>{
    return(
        <FormGroup>
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