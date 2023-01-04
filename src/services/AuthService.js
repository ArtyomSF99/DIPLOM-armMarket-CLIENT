import axios from "axios";
import $api from "../http";
import { API_URL } from "../http";
export default class AuthService {

    static async login(login, password){
        try{
            return $api.post('/login', {
                "login":login,
                "password": password})
        }catch(e){
            console.log(e)
        }
    }

    static async registration(login, password,firstName, lastName, region, connectionEmail, phone, date ){
        try{
            return $api.post('/registration', 
            {
                "login":login,
                "password":password,
                "first_name":firstName,
                "last_name":lastName,
                "region":region,
                "email":connectionEmail,
                "phone":phone,
                "account_create_date":date,
            })
        }catch(e){
            console.log(e)
        }
    }
    
    static async refresh() {
        return axios.get(`${API_URL}/refresh`, {withCredentials:true})
        
    }

    static async getUsers() {
        return $api.get('/users')
    }
    static async logout(){
        return $api.post('/logout')
    }
    static async test5(){
        return 'hello'
    }

}