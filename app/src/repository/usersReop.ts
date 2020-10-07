import Repository from "./repository";

class UserRepository extends Repository {
  getAllUsers = async () => {
    return await this.getAll();
  };
  getUsersListBySearchingValue = async ({ type, value }: any) => {
    return await this.getSpcificDataList(type, value);
  };
}

export default new UserRepository("users");
