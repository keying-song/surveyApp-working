import User from '../schema';

export const addUser=(request, response)=>{
  const user = request.body;
  console.log(user);
} 