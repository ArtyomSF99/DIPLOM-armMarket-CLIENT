import axios from "axios";
import $api from "../http";
import { API_URL } from "../http";
export default class CategoriesService {

    static async getCategories(){
        try{
            return $api.get('/categories')
        }catch(e){
            console.log(e)
        }
    }
    static async getCategoriesInfo(){
        try{
           return $api.get('/categories-info')
        }catch(e){
            console.log(e)
        }
    }

    
    
    static async createCategory(name, parent) {
        try{
            return $api.post(`${API_URL}/category`, {
                "name":name,
                "parent":parent
            })
        }catch(e){
            console.log(e)
        }
      
        
    }
    static async updateCategory(id, name, old_name) {
        try{
            return $api.put(`${API_URL}/category`, {
                "id":id,
                "name":name,
                "old_name": old_name
            })
        }catch(e){
            console.log(e)
        }
      
        
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