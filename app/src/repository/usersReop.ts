import Repository from "./repository";

class UserRepository extends Repository {
  getAllUsers = async () => {
    return await this.getAll();
  };
}

export default new UserRepository("users");
