
import $api from "../http";

export default class UserService {

    static async getUserById(id){
        try{
            return $api.get(`/user/${id}`)
        }catch(e){
            console.log(e)
        }
    }
    static async getUserOpinions(id) {
        return $api.get(`/user/${id}/opinions`)
    }
    static async addOpinion(user_id, sender_user_id, avatar_path, user_name, opinion, exhibition_date, exhibition_time) {
        return $api.post(`/user/opinion`, {
            "user_id":user_id,
            "sender_user_id": sender_user_id,
            "avatar_path": avatar_path || "",
            "user_name": user_name,
            "opinion":opinion,
            "exhibition_date":exhibition_date,
            "exhibition_time":exhibition_time 
        })
    }

    static async getUsers() {
        return $api.get('/users')
    }
    static async editOpinion(opinion_id, new_opinion) {
        try{
            return $api.put(`/user/opinion`, {
                "opinion_id":opinion_id,
                "new_opinion": new_opinion
            })
        }catch(e){
            console.log(e)
        }
      
        
    }
    static async deleteOpinion(id) {
        try{
            return $api.delete(`/user/opinion/${id}`)
        }catch(e){
            console.log(e)
        }
      
        
    }
}