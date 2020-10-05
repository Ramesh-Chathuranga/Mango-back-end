import Repository from "./repository";

class RoomRepository extends Repository {
  getRoom = async (id: any) => {
    return await this.getData(id);
  };

  getRoomList = async () => {
    return await this.getAll();
  };
}

export default new RoomRepository("room");
