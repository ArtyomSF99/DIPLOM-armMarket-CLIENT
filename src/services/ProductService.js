
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

}