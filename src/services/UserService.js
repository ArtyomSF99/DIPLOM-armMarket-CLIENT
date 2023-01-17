import axios from "axios";
import $api from "../http";
import { API_URL } from "../http";
export default class UserService {

    static async getUserById(id){
        try{
            return $api.get(`/user/${id}`)
        }catch(e){
            console.log(e)
        }
    }

  
    static async getUsers() {
        return $api.get('/users')
    }

}