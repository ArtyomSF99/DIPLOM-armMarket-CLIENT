export class Utils {
    static getMainCategories(array) {
        return array.filter(el => el.parent.length === 0)
    }
    static getOneCategory(array, element) {
        return array.filter(el => el.name === element)
    }
    static getAllSubCategories(array, element){
        let subCategories = []
        let firstSubCategoryArray = array.filter(el => el.parent === element)
        for(let i =0; i<firstSubCategoryArray.length; i++){
            subCategories.push(firstSubCategoryArray[i])
            let subCategoryArray = array.filter(el => el.parent === firstSubCategoryArray[i].name )
            for(let j =0; j<subCategoryArray.length; j++){
                subCategories.push(subCategoryArray[j])
            }
        }
        return subCategories
    }
    static getNextCategories(array, parent) {
        if(parent === ""){
            return array.filter(el => el.parent === null)
        }else{
             return array.filter(el => el.parent === parent)
        }
       
    }
    static getCategoryAttributes(array, category_id) {
        return array.filter(el => el.category_id === category_id)
    }
    
    static  getMyDate() {
        const date = new Date()
        let month = date.getMonth()+1
        if (month < 10) {
            month = "0" + month
        }
        let day = date.getDate()
        if (day < 10) {
            day = "0" + day
        }
    
        return `${date.getFullYear()}-${month}-${day}`
    }
    
    static  getMyTime() {
        const date = new Date()
        let hours = date.getHours()
        if (hours < 10) {
            hours = "0" + hours
        }
        let minutes = date.getMinutes()
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        return `${hours}:${minutes}`
    }
    static getSortedArrayByTime(array){
           const res = array.sort(function(a, b) {
            let timeA = a.exhibition_time.split(':');
            let timeB = b.exhibition_time.split(':');
            let dateA = new Date();
            let dateB = new Date();
            dateA.setHours(timeA[0]);
            dateA.setMinutes(timeA[1]);
            dateB.setHours(timeB[0]);
            dateB.setMinutes(timeB[1]);
            return dateA - dateB;
          })
          return res
    }
    static getSortedArrayByDate(array){
        const res =array.sort(function(a, b) {
            return new Date(b) - new Date(a);
          });
          return res
    }
    static getSortedArrayByName(array){
        const res = array.sort(function(a, b) {
            let nameA = a.product_name.toUpperCase();
            let nameB = b.product_name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
          return res
    }
    static getSortedArrayByPrice(array){
        const res = array.sort((function(a, b) {
            return a.product_price - b.product_price;
          }))
          return res
    }
}
