
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
   

    
    
    static async createCategory(name, parent, main_parent) {
        try{
            return $api.post(`${API_URL}/category`, {
                "name":name,
                "parent":parent,
                "main_parent":main_parent
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
    static async deleteCategory(id, name) {
        try{
            return $api.delete(`${API_URL}/category/${id}?name=${name}`)
        }catch(e){
            console.log(e)
        }
      
        
    }

    static async getAttributes(){
        try{
           return $api.get('/attributes')
        }catch(e){
            console.log(e)
        }
    }

    static async createAttribute(category_id, attribute_name) {
        try{
            return $api.post(`${API_URL}/attribute`, {
                "category_id": category_id,
                "attribute_name": attribute_name
            })
        }catch(e){
            console.log(e)
        }   
    }

    static async updateAttribute(id, new_attribute_name) {
        try{
            return $api.put(`${API_URL}/attribute`, {
                "id":id,
                "new_attribute_name": new_attribute_name
            })
        }catch(e){
            console.log(e)
        }
    }
    static async deleteAttribute(id) {
        try{
            return $api.delete(`${API_URL}/attribute/${id}`)
        }catch(e){
            console.log(e)
        }
      
        
    }

}