
import $api from "../http";
import iconv from "iconv-lite"

export default class ProductService {

    static async createProduct(formData, categoryName, productFolder ){
        try{
            return $api.post('/product', formData, {
                headers: {
               
                "Content-Type": "multipart/form-data",
                "folder": encodeURI(categoryName),
                "product": encodeURI(productFolder)
              }})
        }catch(e){
            console.log(e)
        }
    }

    static async getAllProducts() {
        return $api.get('/all-products')
    }
    static async getProductById(id) {
        return $api.get(`/product/${id}`)
    }
    static async getProductsByCategoryId(id, subCategories) {
        let params = ""
        for(let i =0; i<subCategories.length; i++){
            if(i ===0){
                params +="?"
            }
            params += `category_id_${i}=${subCategories[i].id}`
            if(i !== subCategories.length){
                params +="&&"
            }
        }
        return $api.get(`/products/${id}${params}`)
    }

}