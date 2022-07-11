import axios from 'axios';

const URL = '';
export const addUser=()=>{
    try{
        axios.post("${URL}/add")
    }catch(error){
        console.log(`error while calling addUser api`, error);
    }
}