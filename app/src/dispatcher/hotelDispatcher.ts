import express,{Request,Response,NextFunction} from "express";
import HotelRepository from "../repository/hotelRepository";
import BookingRepository from "../repository/bookingRepository";

const hotelDispatcher=express.Router();
hotelDispatcher.route("")
.get(async(req:Request,res:Response)=>{
   try{
    const data = await HotelRepository.getHotelList();
    res.status(200).json(data);
   }catch(error){
    res.status(500).send(error);
   }
})

.post(async(req:Request,res:Response)=>{
    try{
       
        const data = await BookingRepository.findDocument('checkInTimeStamp', req.body.timeValue);
        
        res.status(200).json(data);
       }catch(error){
        res.status(500).send(error);
       }
})


hotelDispatcher.route("/:id")

.get(async(req:Request,res:Response)=>{
   try{
    const id = req.params.id;
    const data = await HotelRepository.getHotel(id);
    res.status(200).json(data);
   }catch(error){
     res.status(500).send(error);
   }
});


export default hotelDispatcher ;