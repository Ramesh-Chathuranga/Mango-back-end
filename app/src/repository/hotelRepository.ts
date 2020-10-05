import Repository from "./repository";

class HotelRepository extends Repository {
  getHotel = async (id: any) => {
    return await this.getData(id);
  };

  getHotelList = async () => {
    return await this.getAll();
  };
}

export default new HotelRepository("hotel");
