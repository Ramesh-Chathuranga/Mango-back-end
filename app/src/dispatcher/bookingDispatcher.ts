import express,{Request,Response,NextFunction} from "express";
import BookingRepository from "../repository/bookingRepository";


const bookingDispatcher=express.Router();
bookingDispatcher.route("")
.get(async(req:Request,res:Response)=>{
   try{
    const data = await BookingRepository.getAllBooking();
    res.status(200).json(data);
   }catch(error){
    res.status(500).send(error);
   }
})

.post(async(req:Request,res:Response)=>{
    try{
      console.info("working")
        const data = await BookingRepository.createBooking(req.body);
        res.status(200).json(data);

    }catch(error){
        res.status(200).send(error);
    }
})

.delete(async(req:Request, res:Response) => {
  try{ 
    console.log("llll",req.body.id)
    //const data = await BookingRepository.getBooking(req.body.id); 
    const data =await BookingRepository.deleteBooking(req.body.id);
    res.status(204).send(data);
  }catch(error){
      res.status(500).send(error);
  }
});

bookingDispatcher.route("/:id")

.get(async(req:Request,res:Response)=>{
   try{
    const id = req.params.id;
    console.log("lll",id)
    const data = await BookingRepository.getBooking(id);
    res.status(200).json(data);
   }catch(error){
     res.status(500).send(error);
   }
})

.put(async(req:Request, res:Response)=>{
  try{
      const body = req.body;
      if(body.id !== req.params.id){
        res.status(400).send("invalid Request Body");
        return;
      }
     const data = await BookingRepository.updateData(body,req.params.id);
     res.status(204).json(data);

  }catch(error){
    res.status(500).send(error);
  }
})

.post(async(req:Request, res:Response)=>{
    try{
      const data = await BookingRepository.getBookingByUser(req.body.userId);
      res.status(200).json(data);
    }catch(error){
        res.status(500).send(error);
    }
});



export default bookingDispatcher ;