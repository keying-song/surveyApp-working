import User from '../schema/user-schema';

export const addUser=as(request, response)=>{
  const user = request.body;
  const newUser = new User(user);
  try{
   await newUser.save();
  }catch(error){

  }
} 