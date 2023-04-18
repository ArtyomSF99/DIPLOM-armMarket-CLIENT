import $api from "../http";
import iconv from "iconv-lite";

export default class ProductService {
  static async createProduct(formData, categoryName, productFolder) {
    try {
      return $api.post("/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          folder: encodeURI(categoryName),
          product: encodeURI(productFolder),
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  static async getAllProducts() {
    return $api.get("/all-products");
  }
  static async getProductById(id) {
    return $api.get(`/product/${id}`);
  }
  static async getProductsByCategoryId(id, subCategories) {
    let params = "";
    for (let i = 0; i < subCategories.length; i++) {
      if (i === 0) {
        params += "?";
      }
      params += `category_id_${i}=${subCategories[i].id}`;
      if (i !== subCategories.length) {
        params += "&&";
      }
    }

    return $api.get(`/category-products/${id}${params}`);
  }
  static async getProductByQuery(query) {
    return $api.get(`/products-by-query?query=${query}`);
  }
  static async deleteProduct(id, folder, category_id) {
    try {
      return $api.delete(
        `/product/${id}?product_folder=${folder}&category_id=${category_id}`
      );
    } catch (e) {
      console.log(e);
    }
  }
  static async orderProduct(buyerId, sellerId, productId, amount) {
    try {
      return $api.post("/order-product", {
        buyer_id: buyerId,
        seller_id: sellerId,
        product_id: productId,
        amount: amount,
      });
    } catch (e) {
      console.log(e);
    }
  }
}
