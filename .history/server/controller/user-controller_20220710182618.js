import User from '../schema/user-schema.js';

export const addUser = async(request, response)=>{
  const user = request.body;
  const newUser = new User(user);
  try{
   await newUser.save();
   response.status(201).json(newUser);
  }catch(error){
    response.status(409).json({message: error.message});
  }
} 

export const getUser = async(request, response)=>{
  try{
   const user= await User.find({});
   response.status(200).json(user);
  }catch(error){res

  }
}