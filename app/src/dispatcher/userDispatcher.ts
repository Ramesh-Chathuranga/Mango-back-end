import express,{Request,Response,NextFunction} from "express";
import UserRepository from "../repository/userRepository";


const userDispatcher=express.Router();
userDispatcher.route("")
.get(async(req:Request,res:Response)=>{
   try{
    const data = await UserRepository.getAllUsers();
    res.status(200).json(data);
   }catch(error){
    res.status(500).send(error);
   }
})

.post((req:Request,res:Response)=>{
    res.status(200).send('ok')
})

.put(async(req:Request, res:Response)=>{

    try{
        const body = req.body;
        if(body.uid !== body.uid){
          res.status(400).send("invalid Request Body");
          return;
        }
       const data = await UserRepository.updateData(body,body.uid);
       res.status(204).json(data);
  
    }catch(error){
      res.status(500).send(error);
    }
})


userDispatcher.route("/:id")

.get(async(req:Request,res:Response)=>{
   try{
    const uid = req.params.id;
    const data = await UserRepository.getAUser(uid);
    res.status(200).json(data);
   }catch(error){
     res.status(500).send(error);
   }
})

.delete((req:Request, res:Response) => {
    res.status(200).send('ok')
});

export default userDispatcher ;