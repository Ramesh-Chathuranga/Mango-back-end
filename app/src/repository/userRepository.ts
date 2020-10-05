import Repository from "./repository";

class UserRepository extends Repository{
    getAllUsers = async()=>{
        return await this.getAll();
    }

    getAUser = async(uid:string)=>{
       return await this.getData(uid);
    }
}

export default new UserRepository('user');