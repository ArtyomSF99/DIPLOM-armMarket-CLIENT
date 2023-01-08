export class Utils {
    static getMainCategories(array) {
        return array.filter(el => el.parent.length === 0)
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
    
}
