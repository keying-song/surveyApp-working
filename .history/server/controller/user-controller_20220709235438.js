import User from '../Schema';

export const addUser=(request, response)=>{
  const user = request.body;
  console.log(user);
} 