import axios from 'axios';


export const addUser=()=>{
    try{
        axios.post(URL)
    }catch(error){
        console.log(`error while calling addUser api`, error);
    }
}