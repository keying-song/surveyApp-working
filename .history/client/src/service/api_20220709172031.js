import axios from 'axios';

const URL = '';
export const addUser=(e)=>{
    try{
        axios.post(`${URL}/add`)
    }catch(error){
        console.log(`error while calling addUser api`, error);
    }
}