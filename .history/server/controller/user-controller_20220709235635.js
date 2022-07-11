import User from '../schema/user-schema';

export const addUser=(request, response)=>{
  const user = request.body;
  const newUser = new User(us)
  console.log(user);
} 