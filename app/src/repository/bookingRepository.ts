import Repository from "./repository";

class BookingRepository extends Repository{
    getAllBooking = async()=>{
        return await this.getAll();
    }

    getBooking = async(id:string)=>{
       
       return await this.getData(id);
    }

    createBooking = async (object:any)=>{
        return await this.createDocument(object);
    }

    deleteBooking =async (id:string) => {
        return await this.deleteDocument(id);
    }

    getBookingByUser = async (id:string) => {
        return await this.findDocument('userId',id);
    }
}

export default new BookingRepository('booking');